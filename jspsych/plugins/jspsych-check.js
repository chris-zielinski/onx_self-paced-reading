/**
* jspsych-form -- jsPsych plugin for AppReg experiment
* Adapted from jspsych-survey-text plugin 
*
* 2020-03-30 christelle.zielinski@univ-amu.fr
**/
jsPsych.plugins["check"] = (function() {

    var plugin = {};

    plugin.info = {
        name: 'self-pace-reading',
        description: '',
        parameters: {
			quest : {
				type: jsPsych.plugins.parameterType.STRING,
				pretty_name: 'Question',
				default: undefined,
				description: "The question to check for participant's attention.'"
			},
			opt_str: {
				type: jsPsych.plugins.parameterType.STRING,
				pretty_name: 'Array of the propositions',
				default: undefined,
				description: 'The affirmations to be checked if there are valid.'
            },
            opt_val: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: 'Array of the response validities',
				default: undefined,
				description: 'Indication if the proposition is valid (1) or not (0).'		  
            },
            id: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Trial Id',
                default: undefined,
                description: 'Associated trial id.'
			},           
            check_form: {
                type: jsPsych.plugins.parameterType.OBJECT,
                pretty_name: 'Form label / feedback function',
                default: undefined,
                description: 'The form structure'
            }
        }
    };

    plugin.trial = function(display_element, trial) {

        // show cursor
        document.body.className = document.body.className.replace(" hidecursor", "");
        // init variables
        var start_time;

        /** function to check for answers */
        var after_response = function(){
        
            // be sure at least one checkbox is checked
            var is_correct = true;
            var all_chk = [];
            var inputs = display_element.querySelectorAll('input[type="radio"]');
            inputs.forEach(function(inpel){
                if (inpel.checked){
                    all_chk.push(inpel.id);
                    if (inpel.value !== "1"){
                        is_correct = false;
                    }
                }else{
                    if (inpel.value === "1"){
                        is_correct = false;
                    }                           
                }
            });
            // nothing is checked: display the alert message
            if (!all_chk.length){
                var req = display_element.querySelector('#required');
                req.style.visibility = 'visible';
                var wrap = display_element.querySelectorAll('#check-wrap');
                wrap.forEach(function(el){
                        el.addEventListener("change", function(){
                        req.style.visibility = 'hidden';
                    }, false);
                });
            }else{
                // hide cursor
                document.body.className += " hidecursor";
                disp_feedback(all_chk, is_correct);
            }
        };

        /*** function to display feedback and end trial  **/
        var disp_feedback = function(chk_arr, is_corr){
            // data to be saved
            var trial_data = {
                type: 'check', 
                id_stim: trial.id,
                resp: chk_arr,
                tclick: Math.round(performance.now()-start_time),
                correct: (is_corr) ? 1 : 0
            };
            
            // clear the display
            display_element.innerHTML = '';

            // add feedback
            var fb = trial.check_form.feedback(is_corr);
            if (is_corr){
                var col = 'green';
            }else{
                var col = 'red';
            }
            display_element.innerHTML = '<div id="feedback"><p class="'+col+'">' + fb +
                "</p><p><i>Press the Spacebar</i> to read a new sentence...</p></div>";

            // finish trial when Space key is pressed
            var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: function(){
                    // kill keyboard listeners
                    jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                    display_element.innerHTML = '';
                    // move on to the next trial
                    jsPsych.finishTrial(trial_data);
                },
                valid_responses: ['space'],
                rt_method: 'performance',
                persist: false,
                allow_held_key: false
            });

        };

        /** display validation button **/
        function add_button(buttx, vis){
            if (vis === undefined){
                vis = true;
            }
            // Add submit button			
            var but = document.createElement('div');
            but.className = "button button-rating";
            but.innerHTML = "<span>" + buttx + "</span>";
            but.id = "submit";
            but.style.visibility = vis ? 'visible' : 'hidden';				
            display_element.appendChild(but);
        }
        
        /** check-point questions for some specific trials **/
        function disp_check(){
            var check_form = trial.check_form;

            // preamb + the wrapper div
            var new_html = '<div class="check-header">' + trial.quest + '</div>' ;
			
            // disp the choices
            var p = '';
            for (var i=0; i<trial.opt_val.length; i++){
                var id_chk = (i+1).toString();
                p += '<p id="p' + id_chk +'">';
                var chkbox = '<input type="radio" id="' + id_chk 
                    + '" class="radio checkbox" name="resp" value="' + trial.opt_val[i] + '">';
                var lab = '<label for="' + id_chk + '">' + trial.opt_str[i] + '</label>';
                p += chkbox + lab + '</p>';
            }
            
            new_html += '<div id="check-wrap">' + p + '</div>';
            
            // add required message if needed
            new_html += '<div id="required" style="visibility:hidden">' +
                    'Please select an answer</div>';
       
            display_element.innerHTML = new_html;

            // disp validation button
            add_button(check_form.submit);

            start_time = performance.now();

            // add click event
            var subm = display_element.querySelector('#submit');
            subm.addEventListener('click', function(){
                var req = display_element.querySelector('#required');
                req.style.visibility = 'hidden';
                after_response();
            });				
        }

        // display the questions
        disp_check();
    };

    return plugin;
})();