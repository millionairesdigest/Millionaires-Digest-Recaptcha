(function($) {
    "use strict";
	$(document).ready(function(){
		// pick initial references
		var refstring0 = $('#visual_challenge').val();
		var refstring1 = $('#audio_challenge').val();
		var refstring2 = $('#refresh_btn').val();
		var refstring3 = $('#instructions_visual').val();
		var refstring4 = $('#instructions_context').val();
		var refstring5 = $('#instructions_audio').val();
		var refstring6 = $('#help_btn').val();
		var refstring7 = $('#play_again').val();
		var refstring8 = $('#cant_hear_this').val();
		var refstring9 = $('#incorrect_try_again').val();
		var refstring10 = $('#image_alt_text').val();
		var r1 = ''; var r2 = '';
		var prestring0 = refstring0;
		var prestring1 = refstring1;
		var prestring2 = refstring2;
		var prestring3 = refstring3;
		var prestring4 = refstring4;
		var prestring5 = refstring5;
		var prestring6 = refstring6;
		var prestring7 = refstring7;
		var prestring8 = refstring8;
		var prestring9 = refstring9;
		var prestring10 = refstring10;
		var refloglimit = $('#sktnurc_logpage_limit').val();
		var refkey1 = $('#sktnurc_publkey').val();
		var refkey2 = $('#sktnurc_privtkey').val();
		var refkey3 = $('#sktnurc_botscoutkey').val();
		var refusrhlp = $('#sktnurc_username_help').val();
		var refemlhlp = $('#sktnurc_email_help').val();
		var refrechlp = $('#sktnurc_reCaptcha_help').val();
		var presusrhlp=refusrhlp;var presemlhlp=refemlhlp;var presrechlp =refrechlp;
		var refuhop = $('#sktnurc_usrhlp_opt').is(":checked");
		var refemop = $('#sktnurc_emlhlp_opt').is(":checked");
		var refrcop = $('#sktnurc_rechlp_opt').is(":checked");
		var refnewversion = $('#rec_version_new').is(":checked");
		var refrectype = $('#rec_type_image').is(":checked");
		var refatlogin = $('#rec_at_login').is(":checked");
		var refimg = $('#sktnurc_theme').val();
		var reflang = $('#sktnurc_lang').val();
		//var precustom = $('#sktnurc_lang option:selected').val();
		var refreg = $('#sktnurc_regbutton').val();
		var textreg = $('#sktnurc_regbutton_text').text();
		var refspam0 = $('#sktSpam_check0').is(":checked");
		var refspam1 = $('#sktSpam_check1').is(":checked");
		var refspam2 = $('#sktSpam_check2').is(":checked");
		var refcstlang = $('.sktlg_radio:checked').val();
		var preslog = 'no';
		// store initial value of custom pages checkboxes
		var refcustompagelist = [];var prescustompagelist = [];
		$('input[name^="sktnurc_custom_page_list"]:checked').each(function(index, elem) {
			refcustompagelist.push($(elem).val());
			//refcustompagelist = refcustompagelist + $(elem).val();
		});
		//prescustompagelist = refcustompagelist;
		var refcustring = refcustompagelist.join(', ');
		var prescustring = refcustring;
		//
		var presuhop = refuhop;var presemop=refemop ; var presrcop=refrcop;
		var presimg=refimg;var preskey1=refkey1;var preskey2=refkey2;var preskey3=refkey3;
		var preslang=reflang;var prescstlang=refcstlang;var presreg=refreg;
		var presspam0 = refspam0;var presspam1 = refspam1;var presspam2 = refspam2;
		var presloglimit = refloglimit; var presnewversion = refnewversion; var presrectype = refrectype;
		var presatlogin = refatlogin;
		if((refkey1!=='')&&(refkey2!=='')){
			$('#setup_alert').css('display','none');
		}
		$('#sktnurc_theme').change( function(){
			var antimg = presimg;
			presimg = $('#sktnurc_theme').val();
			$('#sktnurc-display-' + antimg).fadeTo(300,0);
			$('#sktnurc-display-' + presimg).fadeTo(600,1);
			advert_check();
		});
		$('#sktnurc_lang').change( function(){
			preslang = $('#sktnurc_lang').val();
			if(preslang===reflang){
				$('#sktcstlg').slideDown();
				$('#save-advert-lang').fadeOut();
			}else{
				$('#sktcstlg').slideUp();
				$('#save-advert-lang').fadeIn();
			}
			advert_check();
		});
		$('#sktlg_radio1').change(function() {
 			$('#sktlg').slideDown();
 			$('#sktcstlg').slideDown();
			$('#save-advert-lang2').fadeOut();
			prescstlang='basic';
			if (refcstlang==='custom'){
				$('#save-advert-lang1').fadeIn();
			}
			advert_check();
		});
		$('#sktlg_radio2').change(function() {
			prescstlang='custom';
			$('#save-advert-lang1').fadeOut();
			if (refcstlang!=='custom'){
				$('#sktlg').slideUp();
				$('#sktcstlg').slideUp();
				$('#save-advert-lang2').fadeIn();
			}
			advert_check();
		});
		$('#rec_version_new').change(function() {
			presnewversion = $('#rec_version_new').is(":checked");
			advert_check();
		});
		$('#rec_version_old').change(function() {
			presnewversion = $('#rec_version_new').is(":checked");
			advert_check();
		});
		$('#rec_type_image').change(function() {
			presrectype = $('#rec_type_image').is(":checked");
			advert_check();
		});
		$('#rec_type_audio').change(function() {
			presrectype = $('#rec_type_image').is(":checked");
			advert_check();
		});
		$('#rec_at_login').change(function() {
			presatlogin = $('#rec_at_login').is(":checked");
			advert_check();
		});
		$('#rec_not_at_login').change(function() {
			presatlogin = $('#rec_at_login').is(":checked");
			advert_check();
		});
		$('#sktnurc_username_help').keyup( function(){
			presusrhlp = $('#sktnurc_username_help').val();
			advert_check();
		});
		$('#sktnurc_email_help').keyup( function(){
			presemlhlp = $('#sktnurc_email_help').val();
			advert_check();
		});
		$('#sktnurc_reCaptcha_help').keyup( function(){
			presrechlp = $('#sktnurc_reCaptcha_help').val();
			advert_check();
		});
		$('#sktnurc_usrhlp_opt').change(function() {
			presuhop = $('#sktnurc_usrhlp_opt').is(":checked");
			advert_check();
		});
		$('#sktnurc_emlhlp_opt').change(function() {
			presemop = $('#sktnurc_emlhlp_opt').is(":checked");
			advert_check();
		});
		$('#sktnurc_rechlp_opt').change(function() {
			presrcop = $('#sktnurc_rechlp_opt').is(":checked");
			advert_check();
		});
		$('#sktSpam_check0').change(function() {
			presspam0 = $('#sktSpam_check0').is(":checked");
			advert_check();
		});
		$('#sktSpam_check1').change(function() {
			presspam1 = $('#sktSpam_check1').is(":checked");
			advert_check();
		});
		$('#sktSpam_check2').change(function() {
			presspam2 = $('#sktSpam_check2').is(":checked");
			advert_check();
		});
		$("input[name^='sktnurc_custom_page_list']").change(function() {
			prescustompagelist = [];
			$('input[name^="sktnurc_custom_page_list"]:checked').each(function(index, elem) {
				prescustompagelist.push($(elem).val());
			});
			prescustring = prescustompagelist.join(', ');
			advert_check();
		});
		$('#sktnurc_publkey').keyup( function(){
			preskey1 = $('#sktnurc_publkey').val();
			advert_check();
			alert_check();
		});
		$('#sktnurc_privtkey').keyup( function(){
			preskey2 = $('#sktnurc_privtkey').val();
			advert_check();
			alert_check();
		});
		$('#sktnurc_botscoutkey').keyup( function(){
			preskey3 = $('#sktnurc_botscoutkey').val();
			advert_check();
		});
		$('#sktnurc_regbutton').keyup( function(){
			presreg = $('#sktnurc_regbutton').val();
			if($.trim(presreg)===""){
				presreg=textreg;
			}
			$('#sktnurc-mockup-wp-submit').val(presreg);									
			advert_check();
		});
		$('#sktnurc_logpage_limit').keyup( function(){
			presloglimit = $('#sktnurc_logpage_limit').val();
			advert_check();
		});
		$('#visual_challenge').keyup( function(){
			prestring0 = $('#visual_challenge').val();
			advert_check();
		});
		$('#audio_challenge').keyup( function(){
			prestring1 = $('#audio_challenge').val();
			advert_check();
		});
		$('#refresh_btn').keyup( function(){
			prestring2 = $('#refresh_btn').val();
			advert_check();
		});
		$('#instructions_visual').keyup( function(){
			prestring3 = $('#instructions_visual').val();
			advert_check();
		});
		$('#instructions_context').keyup( function(){
			prestring4 = $('#instructions_context').val();
			advert_check();
		});
		$('#instructions_audio').keyup( function(){
			prestring5 = $('#instructions_audio').val();
			advert_check();
		});
		$('#help_btn').keyup( function(){
			prestring6 = $('#help_btn').val();
			advert_check();
		});
		$('#play_again').keyup( function(){
			prestring7 = $('#play_again').val();
			advert_check();
		});
		$('#cant_hear_this').keyup( function(){
			prestring8 = $('#cant_hear_this').val();
			advert_check();
		});
		$('#incorrect_try_again').keyup( function(){
			prestring9 = $('#incorrect_try_again').val();
			advert_check();
		});
		$('#image_alt_text').keyup( function(){
			prestring10 = $('#image_alt_text').val();
			advert_check();
		});
 		$('#custom_pages_button').click( function(){
			$('#sktnurc_pages_checkbox').slideToggle();
		}); 
		$('.log_button').click( function(){
			$('#log_entries').slideToggle();
			$('#log_button').fadeToggle();
			$('#no_log_button').fadeToggle();
			$('#unlink_log_button').fadeToggle();
		});
		$('#unlink_log_button').click(function(){
			var dialog = $('#confirm_dialog').val();
			logfile_manage(confirm(dialog));
		});
		$('#link_log_button').click(function(){
			logfile_manage(false);
		});
		//window.alert_check = function() {
		function alert_check() {
			r1 = $('#sktnurc_publkey').val();
			r2 = $('#sktnurc_privtkey').val();
			if ((r1!=='')&&(r2!=='')) {
				$('#setup_alert').fadeOut();
			} else {
				$('#setup_alert').fadeIn();
			}
		}
		function advert_check() {
		//window.advert_check	= function() {
			if ((presuhop === refuhop) && (presemop===refemop) && (presrcop===refrcop) && (presusrhlp === refusrhlp) && (presemlhlp === refemlhlp) && (presrechlp === refrechlp) && (prestring0 === refstring0) && (prestring1 === refstring1) && (prestring2 === refstring2) && (prestring3 === refstring3) && (prestring4 === refstring4) && (prestring5 === refstring5) && (prestring6 === refstring6) && (prestring7 === refstring7) && (prestring8 === refstring8) && (prestring9 === refstring9) && (prestring10 === refstring10) && (preslang === reflang) && (prescstlang===refcstlang) && (presimg === refimg) && ((presreg===refreg)||((presreg===textreg)&&(refreg===''))) && (preskey1===refkey1) && (preskey2===refkey2) && (preskey3===refkey3) && (presspam0===refspam0) && (presspam1===refspam1) && (presspam2===refspam2) && (preslog === 'no') && (presloglimit===refloglimit) && (presnewversion===refnewversion) && (presrectype === refrectype) && (presatlogin === refatlogin) && (prescustring === refcustring)) {
				$('.save-advert').fadeOut();
			} else {
				$('.save-advert').fadeIn();
			}
		}
		//window.logfile_manage = function(res){
		function logfile_manage(res) {
			if (res === true) {
					preslog = "yes";
					$('#unlink_log_button').fadeOut();
					$('#link_log_button').fadeIn();
				} else {
					preslog = "no";
					$('#unlink_log_button').fadeIn();
					$('#link_log_button').fadeOut();
				}
			$('#log_clear').val(preslog);
			advert_check();
		}
	});	
})(jQuery);
