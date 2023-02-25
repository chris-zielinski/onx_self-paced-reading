/**
 * jspsych-self-paced-reading
 * crex-cz-201103
 * Adapted from jspsych-html-keyboard-response (Josh de Leeuw)
 *
 * plugin for self pace reading task
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["self-paced-reading"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'self-paced-reading',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The sentence to be displayed word by word.'
      },
	  context: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Context',
        default: undefined,
        description: 'The context sentence displayed before the self pace reading task.'		  
	  },
	
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
	  
	  min_allowed_rt: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Minimal RT duration',
        default: 50,
        description: 'Minimal RT duration in ms to prevent typing errors.'		
	  },

      inter_word_interval: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Inter-word duration',
        default: 0,
        description: 'Duration with blank screen between successive words in ms.'
      },
	  
	  data: {
        type: jsPsych.plugins.parameterType.OBJECT,
        pretty_name: 'Stimulus properties',
        default: undefined,
        description: 'Object with fields: "id", "cond", "pos_dt"'
	  }

    }
  }

  plugin.trial = function(display_element, trial) {
	
	// prepare the display
	display_element.innerHTML += '<div id="jspsych-self-pace-reading-stimulus" class="wrap">'+
								'<div id="mask" class="stimbox"></div>' +
								'<div id="wd_mask" class="stimbox"></div></div>';

	// word display
	var wd_elm = document.getElementById("wd_mask");
	// mask display
	var msk_elm = document.getElementById("mask");

	/*--- init values ---*/

	// keep all reaction times	
	var word_rt = [];
	// associated word positions
	var word_pos = [];
	
	// split sentence / words
	var word_split = trial.stimulus.split(" ");
	var mask_split = trial.stimulus.replace(/[^ ]/g, '_').split(" ");
	// console.log(trial);
	// add the context as first element to be displayed
	var word_arr = trial.stimulus.split(" ");
	word_arr.unshift(trial.context);

	// index to select the word to be displayed in the word array
	var i_word = 0;
	
	// total number of words
	var nb_word = word_arr.length;
	
	// minimum duration required to read a word before press space key
	// in ms
	var rt_thr = trial.min_allowed_rt;
	
	// display time
	var disp_time;
	
	// rt value
	var rt_val = 0;
	
	var is_doi = typeof trial.data.pos_dt=='undefined' ? false : true;

	var display_word = function(iword){
		// SPR word
		if (iword > 0){
			if (iword==1){
				msk_elm.innerHTML = mask_split.join(" ");
			}
			// .slice to make a deep copy
			var msk_wd = mask_split.slice();
			msk_wd[iword-1] = word_split[iword-1];
			wd_elm.innerHTML = msk_wd.join(" ");
		}else{
			// context sentence
			wd_elm.innerHTML = word_arr[iword];
		}
		
		// keep display time
		disp_time = performance.now();
	}
    
	// display the first one
	display_word(i_word);


    // function to end trial when it is time
    var end_trial = function() {
		// clear the display
		display_element.innerHTML = "";

		// document.body.removeChild(disp_elm);
		// kill any remaining setTimeout handlers
		jsPsych.pluginAPI.clearAllTimeouts();
		
		// kill keyboard listeners
		if (typeof keyboardListener !== 'undefined') {
			jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
		}
		// get the specific duration between the pos_on and pos_off
		// == duration of interest, doi
		// !! consider the first fake word == the context sentence
		var doi = 0;
		if (is_doi){
			var i_on = trial.data.pos_dt[0];
			var i_off = trial.data.pos_dt[1];
			
			// RT to be summed	
			for (var j=i_on; j<=i_off; j++){
				doi += word_rt[j];
			}
			var pos_dt = JSON.stringify(trial.data.pos_dt);
		}else{
			var pos_dt = "";
		}
		
		// gather the data to store for the trial
		// don't keep the context sentence to get lighter data
		word_arr[0] = "contx";
		var trial_data = {
			"type": "spr",
			"rt": JSON.stringify(word_rt),
			"pos": JSON.stringify(word_pos),
			"word": JSON.stringify(word_arr),
			//"stimulus": trial.stimulus,
			"duroi": Math.round(doi),
			"pos_dt": pos_dt
		};
		// move on to the next trial
		jsPsych.finishTrial(trial_data);
	};

    // function to handle responses by the subject
    var after_response = function(info) {
		
		// get the RT and compare it to the rt_thr threshold to prevent key press errors
		rt_val = Math.round(performance.now() - disp_time);
		
		// store RT only if word has been seen during at least rt_thr ms
		if (rt_val > rt_thr) {
			var is_ok = true;
			if (i_word==0 && rt_val<1000){
				is_ok = false;
			}
			if (is_ok){
				word_rt.push(rt_val);
				word_pos.push(i_word+1);
				// display the next word
				if (i_word+1 < nb_word){
					i_word++;
					// remove the word, display the next one
					wd_elm.innerHTML = "";
					jsPsych.pluginAPI.setTimeout(function(){
						display_word(i_word);
					}, trial.inter_word_interval);
					
				}else{
					end_trial();
				}
			}
		}
    };

    // start the response listener
	var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: true, // instead of false,
        allow_held_key: false
	});

  };

  return plugin;
})();
