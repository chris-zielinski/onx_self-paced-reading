/**
* jspsych-form -- jsPsych plugin for AppReg experiment
* Adapted from jspsych-survey-text plugin 
*
* Input parameters :
* -----------------
*
* Each form row is defined by an object with parameters :
* 
* --- type : kind of response choice to display : 
*			'text' : input text field
*			'radio' : radio button (a unique choice amongst several)
			'checkbox' : check box choices
			'list' : choice in the drop-down menu
*
* --- id : identification string to retrieve the associated answer in the jspsych recorded data
*
* --- quest : the question asked to the user
*
* --- visible_if : option to display the element only if other previous elements are selected : array with the id name of the required selected elements

* Choice list for 'radio', 'checkbox' or 'list' type
* --- opt_str : array of option string to display		
* --- opt_id : array of associated identification strings to retrieve the answer in jspsych data
*
* If type is 'checkbox' :
* --- checklim :  maximum allowed answers for checkbox list	
*
* If type is 'text':
* --- input_nchar : width of the input text field in number of characters
*
* Each row element is append to an array to define the whole form page that will be created 
* by this plugin.
*
* Example of form page definition :
*
* 	// Definition of the rows (one object = one form row)
*	var form_elmt = [
*		{
*		type : "radio",	
*		id : "manual",
*		quest : "Your handedness : ",
*		radio_str : ["left", "right"],
*		radio_id : ["left", "right"]
*		},						
*		{
*		type: "text",	
*		id: "age",  
*		quest: "Your age :", 
*		input_nchar: 3 
*		},	
*		{
*		type: "radio",
*		id: "prob",
*		quest: "Have you encountered any problem during the experiment ?",
*		radio_str : ["yes", "no"],
*		radio_id : ["yes", "no"]
*		},
*		{
*		type: "text",
*		id: "anywhich",
*		quest: "Which kind ?",
*		input_nchar: 30,
*		visible_if : ["prob_yes"]
*		},
*		{
*		type: "checkbox",
*		id: "kb_func",
*		quest: "What is your main activity (max. 2 choices) ?",
*		opt_str: ["note taken", "copy", "composition", "email", "instant messaging"],
*		opt_id: ["note", "copy", "compo", "email", "chat"],
*		checklim: 2
*		},
*		{
*		type: "radio",
*		id: "othmed_smart",
*		quest: "Do you use a smartphone ?",
*		opt_str: ["yes", "no"],
*		opt_id: ["yes", "no"]
*		},
*		{
*		type: "list",
*		id: "othmed_smart_year",
*		quest: "From how many years ?",
*		opt_str : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15 yrs and more"],
*		opt_id : ["1","2","3","4","5","6","7",
*		"8","9","10","11","12", "13","14","15"],
*		visible_if : ["othmed_smart_yes"]
*		}
*		];
*				
*		// Block definition (as a jspsych object)
*		var form_block = {
*			type: "form",
*			form_struct: form_elmt,
*			preamble : "Some informations to finish :",
*			submit : "Submit"
*		};
*
*
* TO DO : for conditional answer, remove value if trigger choice is finally uncheck 
*
* jsPsych documentation: docs.jspsych.org
* de Leeuw, J. R. (2014). jsPsych: A JavaScript library for creating behavioral 
* experiments in a Web browser. Behavior research methods, 1-12
*
* CREx-BLRI-AMU
* https://github.com/blri/Online_experiments_jsPsych
* 2016-12-13 christelle.zielinski@blri.fr
**/

jsPsych.plugins['form'] = (function() {

    var plugin = {};

    plugin.info = {
        name: 'form',
        description: '',
        parameters: {    
            preamble: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Preamble',
                default: '',
                description: 'HTML formatted string to display at the top of the page above all the questions.'
              },
              submit: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Button label',
                default:  'Continue',
                description: 'The text that appears on the button to finish the trial.'
              },
              form_struct: {
                  type: jsPsych.plugins.parameterType.OBJECT,
                  pretty_name: 'Form structure',
                  default: undefined,
                  description: 'Form objects array (each object=one question)'
              }
        }  
    };

    function prepare_form(params){
        // Check for form_struct parameters 		
        var form_in = params.form_struct;		
        // array to keep all form elements with checked parameters
        var form_out = [];
        // array to store all id of element that make another visible
        var all_id_cond = [];
        // default params for each form element
        var def_obj = {	
            id: function(fobj, i){ return 'Q'+i;},
            quest: '',
            type: 'text',
            // length of input field of type text in number of character
            nchar_width: 20,
            // arr of options for radio/checkbox/select type
            opt_str: [''],
            // associated array of unique id that will be used as answer value in output data
            opt_id: function(fobj, i){ return (fobj.type==='text')? [fobj.id] : '';},
            // maximum allowed number of checkbox checked
            check_lim: 0,
            // flag to know if answer if required before effective validation of the form
            required: 0,
            // conditionnal state: array of previous answer id (in opt_id) that can make this form element visible
            visible_if: []
        };
        // check for input parameters
        function check_form_obj(fobj, def_obj){
            var i = 1;
            for (var k in def_obj){					
                if (typeof fobj[k] === 'undefined'){
                    fobj[k] = (typeof def_obj[k] === 'function') ? def_obj[k](fobj, i) : def_obj[k];
                }
                i++;
            }
            return fobj;
        }
        function force_arr(fobj, field_arr){
            for (var i=0; i<field_arr.length; i++){
                var fn = field_arr[i];
                fobj[fn] = (fobj[fn].length===0) ? fobj[fn] : ((typeof fobj[fn] === 'string') ? [fobj[fn]] : fobj[fn]);
            }
            return fobj;
        }

        for (var i=0 ; i < form_in.length ; i++){        
            var fobj = form_in[i];
            // set default for undefined fields
            fobj = check_form_obj(fobj, def_obj);
            // add some parameters
            /* The number of character nchar is used to defined the width of
            of the input text field, which is expressed in em units. One em 
            corresponds to	height of a Ç",being about 130% higher than its width.*/
            fobj.input_width = (fobj.type==='text') ? Math.floor(fobj.nchar_width*0.7)+'em' : '';
            fobj.is_visible = (fobj.visible_if.length===0) ? true : false;
            // continue with this form element only if all necessary parameters have been set
            if ((fobj.type === "text" && fobj.quest==='') || 
                (fobj.type!=='text' && fobj.opt_str.length===0)){
                    continue;
            }
                
            // force array for opt_str, opt_id and
            fobj = force_arr(fobj, ['opt_id', 'opt_str', 'visible_if']);
            
            // collect all id of element that will fire an event to make hidden element visible
            // define the "cond_ID" class of the hidden element based on the id of the 
            // element that will make it visible if it is checked
            var cond_vis = fobj.visible_if;
            var hid_class = '';
            for (var k=0 ; k<cond_vis.length ; k++){
                if (all_id_cond.indexOf(cond_vis[k]) === -1){
                    all_id_cond.push(cond_vis[k]);
                }
                // be sure unique class name by combining the main question ID with the specific element id
                hid_class += 'cond_' + cond_vis[k] + ' ';
            }
            fobj.hidden_class = hid_class;
            // store new form element only if opt_str and quest have been set	
            form_out.push(fobj);
        }
        // add on change function to the cond_ID elements + div
        var disp_visible = function(){
            var id = this.getAttribute("id");
            var quest_id = '#' + id;
            // associated parent response div id
            var ifvis_div = document.querySelectorAll(quest_id + '>.cond_opt, '+quest_id+'>label>.cond_opt');
            // check if select list type
            var is_list = false;
            if (id.slice(0, 5)=="list_"){
                is_list = true;
                id = id.slice(5);
            }
            for (var k=0; k<ifvis_div.length; k++){
                var cid = ifvis_div[k].getAttribute("id");
                var ccid = document.querySelectorAll('.cond_'+cid);
                for (var g=0; g<ccid.length; g++){
                    if ((ifvis_div[k].checked) || (is_list && [id, this.value].join("_")===cid)){
                        ccid[g].className = ccid[g].className.replace('hiderow', '');
                    }else{
                        if (ccid[g].className.indexOf('hiderow')===-1){
                            ccid[g].className += ' hiderow';
                        }
                    }
                }
                
            }
        };
        for (var i=0 ; i<form_out.length ; i++) {
            var fobj = form_out[i];
            var Nopt = fobj.opt_id.length;
            // Array to know if an on change function has to be associated with the option				
            var opt_func_flag = [];
            for (var io=0 ; io<Nopt ; io++) {
                if (all_id_cond.indexOf(fobj.id + '_' + fobj.opt_id[io])>-1){
                    opt_func_flag.push(1);
                }else{
                    opt_func_flag.push(0);
                }
            }
            form_out[i].opt_func_flag = opt_func_flag;
        }
        var trial ={
            preamble : (typeof params.preamble == 'undefined') ? "" : params.preamble,
            form_element : form_out,
            submit : (typeof params.submit == 'undefined') ? "Submit" : params.submit,
            //progbar : (typeof params.progbarstr === 'undefined') ? "" : params.progbarstr,
            opt_func : disp_visible
        };

        return trial;
    }

    plugin.trial = function(display, trial) {
        
        // Evaluates the function if any
        // trial.form_element = jsPsych.pluginAPI.evaluateFunctionParameters(trial.form_element);
        trial = prepare_form(trial);

        /**------ DISPLAY THE FORM **/
        display.className += ' form';

        // all the html
        var html = "";
        // store id of the element that are link to a conditionnal form row
        var change_vis_id = [];

        // Add progress bar
        //display.append(trial.progbar);
        
        // Show preamble text
        display.innerHTML += "<div id='preamb' class='form_preamble'>" + trial.preamble + "</div>";        
        display.innerHTML += "<div id='form' class='form_div'></div>";

        var form_elm = document.getElementById('form');
            
        var nrow = trial.form_element.length;

        /** FORM QUESTIONS AND OPTIONS **/
        // Add questions, input aeras and radio buttons
        for (var i=0; i<nrow; i++) {
            var elm = trial.form_element[i];
            var quest_id = elm.id;
            // visible elm ?
            var is_vis = elm.is_visible;
            var vis_class = (!is_vis) ? 'hiderow' : '';
            // row ID
            var row_id = 'row_' + quest_id;

            form_elm.innerHTML += "<div id='" + row_id + "'></div>";
            var row_elm = document.getElementById(row_id);
            row_elm.className = 'form_row ' +  elm.hidden_class + ' ' + vis_class;
            row_elm.className += (elm.required===0) ? ' form_onchg' : '';

            /** QUESTION **/
            // Question as div element
            row_elm.innerHTML += '<div class="form_quest" name="'+quest_id+'">' + elm.quest + '</div>';        
 
            // prepare answer column
            // ID of the response div-column element
            var resp_id = 'resp_' + quest_id; 
            row_elm.innerHTML += '<div class="form_resp" id="'+resp_id+'"></div>';           
            var resp_elm = document.getElementById(resp_id);
            
            var input_type = elm.type;
            /** LIST TYPE **/
            if (input_type==='list'){
                var list_id = 'list_' + quest_id;
                var list_sel = '<select id="' + list_id + '" name="' + quest_id +
                                '" class="' + ((elm.required===1)?'req':'') +'"></select>';            
                resp_elm.innerHTML += list_sel;
                var list_elm = document.getElementById(list_id);
                
                // List choices
                // Add a first one "Choix" (if selected after submit, indicating that nothing had been selected)
                var list_opt = '<option value="NA">Select</option>';
                
                list_elm.innerHTML += list_opt;						
                
                for (var j=0 ; j<elm.opt_str.length ; j++) {
                    var oid = quest_id + '_' + elm.opt_id[j];
                    list_opt = '<option value="'+elm.opt_id[j]+'" id="'+ oid +'"'+
                                ' name="' + quest_id + '">' + elm.opt_str[j] + '</option>';
                    
                    list_elm.innerHTML += list_opt;
  
                    if (elm.opt_func_flag[j]===1){
                        var opt_elm = document.getElementById(oid);
                        opt_elm.className = 'cond_opt';
                        change_vis_id.push(list_id);
                    }        
                }
            }
            /** OTHER TYPE RADIO, CHKBOX, TEXT... **/
            if (input_type !=='list'){
                /** LOOP // choices**/
                // display radio inline (few choices expected) --> inside a div wrapped by the flex-column div
                if (input_type === 'radio'){
                    var radd_id = 'raddiv_' + quest_id;
                    var rad_div = '<div id="' + radd_id + '" class="radio_div"></div>';
                    resp_elm.innerHTML += rad_div;
                    // change resp_elm to the radio div
                    resp_elm = document.getElementById(radd_id);
                }
                // create the input elements
                for (var j=0; j<elm.opt_id.length; j++){
                    var input_id = elm.opt_id[j];
                    var uid = quest_id + '_' + input_id;
                    var input_label = elm.opt_str[j];
                    var input = '<input type="'+input_type+'" id="'+uid+'" name="'+quest_id+'" '+
                        'class="'+input_type +'_but choice '+((elm.required===1)?'req':'')+'" '+
                        'style="width:'+ elm.input_width +';" '+ 
                        ((input_type!=='text')?'value="'+input_id+'"':'') + '>';
                    //(associated value for radio or checkbox type)

                    // label
                    var label = '<label id="lab'+uid+'" for="'+uid+'" class="'+ input_type+'_lab">'+
                            input + input_label+'</label>'; 
                    // (prepend to have radio in the left)
                    resp_elm.innerHTML += label;
                    // add change function to the response div if this element fire a visibility change
                    // of another question		
                    if (elm.opt_func_flag[j]===1){
                        var input_elm = document.getElementById(uid);
                        input_elm.className += ' cond_opt';
                        change_vis_id.push(resp_elm.getAttribute('id'));
                    }
                    
                    // special for check_box
                    // Attach maximum allowed choices
                    // jaredhoyt's answer in http://stackoverflow.com/questions/10458924/limit-checked-checkbox-in-a-form
                    if ((input_type==='checkbox') && (elm.check_lim>0)){
                        var checkbox_all = document.querySelectorAll('input[name=' + elm.id + ']');
                        var max = elm.check_lim;

                        for (var k=0; k<checkbox_all.length; k++){
                            checkbox_all[k].addEventListener('change', function(){
                                // count the checked checkbox
                                var chbox = document.querySelectorAll('input[name=' + elm.id + ']:checked');
                                var current = chbox.length;
                                var chbox_no = document.querySelectorAll('input[name=' + elm.id + ']:not(:checked)');
                                for (var g=0; g<chbox_no; g++){
                                    chbox_no[g].disabled = current >= max;
                                }
                            }, false);
                        }
                    }
                    
                }			
            }
        } // end loop // form rows
        
        // required message
        display.innerHTML += '<div id="required" style="margin-top:1em;text-align:center;width:100%;'+
            'color:rgb(246, 108, 20);display:none">Please answer all the questions before submitting.</div>';

        // Add submit button     
        display.innerHTML += '<div class="button" id="submit"><span>'+trial.submit+'</span></div>';  
        /**------ PARSE THE RESPONSES AFTER SUBMIT BUTTON CLICK **/
        var submit_elm = document.getElementById('submit');
        submit_elm.addEventListener('click', function(){
              // Measure response time
            var endTime = (new Date()).getTime();
            var response_time = endTime - startTime;   
            // Add hidden input for elements of type "select" (list) to hold the selected value
            var select_all = document.querySelectorAll('#form select');
            for (var k=0; k<select_all.length; k++){
                var selc = select_all[k];
                var sel_name = selc.getAttribute("name");
                var sel_val = selc.value;
                var rq = '';
                if (selc.className.split(/\s+/).indexOf("req") !==-1){
                    rq = 'req';
                }
                var hd = '';
                if (selc.className.split(/\s+/).indexOf("hiderow") !==-1){
                    hd = 'hiderow';
                }
                var sel_elm = document.getElementById("selc_"+sel_name);
                if (sel_elm){
                    sel_elm.value = sel_val;
                }else{
                    var inp = document.createElement("input");
                    inp.id = "selc_" + sel_name;
                    inp.type = "hidden";
                    inp.name = sel_name;
                    inp.value = sel_val;
                    inp.className = "choice "+rq+" " +hd;
                  //  var inp_sel = '<input id="selc_' + sel_name+'" type="hidden" name="'+sel_name+'" '+
                  //      'value="'+sel_val+'" class="choice '+rq+' '+hd+'"/>';
                    document.getElementById("form").appendChild(inp);
                }
            }

            // Create object to hold responses
            var form_data = {};	
            var is_req = {};
            var req_data = {};
            // Parse all input fields, store associated NAME (as "name") and VALUES	
            // Restrict to form_resp class only to avoid AdWare / SpyWare data inclusion (hidden input..)				
            var choice_all = document.querySelectorAll('.choice');
            for (var k=0; k<choice_all.length;k++){
                var choice = choice_all[k];
                var intyp = choice.getAttribute("type");
                var fname = choice.getAttribute("name");
                var val = choice.value;
                // Initialize object key / content
                if (typeof req_data[fname]==='undefined'){
                req_data[fname] = 'NA';
                }
                // special case for checkbox (multiple values to be collected)
                if (typeof form_data[fname] === 'undefined' && intyp !=='checkbox'){
                    form_data[fname] = 'NA';
                }					
                // Input text field or selected element or radio button : a unique answer 
                // to add to the field with the name value of the form_data object
                // For radio element, keep value only if it is checked
                if ( intyp==='text' || intyp==='hidden' || 
                    (intyp==='radio' && choice.checked)){
                    if (val===''){
                        val = 'NA';
                    }
                    req_data[fname] = val;
                    form_data[fname] = val;
                }
                // Special case for checkbox type because several element (with the same "name" attribute)
                // could by checked
                if (intyp === 'checkbox'){
                    
                    if (choice.checked){
                        form_data[fname + '_' + val] = 1;
                        req_data[fname] = val;
                    }else{
                        form_data[fname + '_' + val] = 0;
                    }
                }
                if (typeof is_req[fname] === 'undefined'){	
                    var rowel = document.getElementById('row_'+fname);
                    var isreq = !(rowel.className.indexOf("hiderow") !==-1);
                    isreq = isreq && (choice.className.split(/\s+/).indexOf("req") !==-1);		
                    is_req[fname] = isreq ? 1 : 0;
                }
            }

            // Check if all response were given
            var isn = 0;
            for (var k in req_data) {
                var rowel = document.getElementById('row_'+k);
                if (req_data[k]==='NA' && is_req[k]===1 ){
                    if (rowel.className.indexOf('reqanswer') === -1){
                        rowel.className += ' reqanswer';
                    }
                    rowel.className = rowel.className.replace('form_onchg', '');
                    isn = 1;
                }else{
                    rowel.className = rowel.className.replace('reqanswer', '');
                }
            }
            
            if (isn==1){
                var req = document.getElementById('required');
                req.style.display = "block";
                // set the onchange event again (strange thing with vanilla javascript/jspsych...)
                //onchange_green();
                //condis_visible(); 
            }else{
                // save data                       
                jsPsych.data.write({
                    "rt": response_time,
                    "responses": form_data //JSON.stringify(form_data)
                });
                display.innerHTML = "";
                display.className = display.className.replace(' form', '');
                // next trial
                jsPsych.finishTrial();
            }   
        }, false);

        /*---- add onchange event for required response:
            question color change from red to green   ----*/
        function onchange_green(){
            for (var i=0; i<nrow; i++) {
                var elm = trial.form_element[i];
                var quest_id = elm.id;
                // row ID
                var row_id = 'row_' + quest_id;
                var row_elm = document.getElementById(row_id);
                row_elm.addEventListener('change', function(){
                    if (this.className.indexOf('form_onchg') === -1){
                        this.className += " form_onchg";
                    }
                    this.className = this.className.replace('reqanswer', '');
                    // remove the required msg if all questions have been changed from the last validation
                    var req = document.getElementById('required');
                    if  (req.style.display === 'block' && document.getElementsByClassName("test").length===0){
                        req.style.display = 'none';
                    }

                }, false);
            };
        };

        /*---- add onchange event to make conditionnal row form appear */
        function condis_visible(){
            for (var i=0; i<change_vis_id.length; i++){
                var elm = document.getElementById(change_vis_id[i]);
                elm.addEventListener('change', trial.opt_func, false);
            }
        }
        onchange_green();
        condis_visible();  
              
        var startTime = (new Date()).getTime();
    };

    return plugin;
})();