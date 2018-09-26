<?php 
if(!defined('ABSPATH') && !defined('WP_UNINSTALL_PLUGIN') ) die();
//active options:
delete_option('sktnurc_botscout_active');
delete_option('sktnurc_botscoutkey');
delete_option('sktnurc_botscoutTestMode');
delete_option('sktnurc_custom_page_list');
delete_option('sktnurc_data_theme');
delete_option('sktnurc_data_type');
delete_option('sktnurc_email_help');
delete_option('sktnurc_emlhlp_opt');
delete_option('sktnurc_lang');
delete_option('sktnurc_lang_set');
delete_option('sktnurc_login_recaptcha');
delete_option('sktnurc_privtkey');
delete_option('sktnurc_publkey');
delete_option('sktnurc_reCaptcha_help');
delete_option('sktnurc_recaptcha_language');
delete_option('sktnurc_recaptcha_version');
delete_option('sktnurc_rechlp_opt');
delete_option('sktnurc_reclocales_lang');
delete_option('sktnurc_regbutton');
delete_option('sktnurc_stopforumspam_active');
delete_option('sktnurc_theme');
delete_option('sktnurc_username_help');
delete_option('sktnurc_usrhlp_opt');
delete_option('sktnurclog_db_version');
// deprecated:
delete_option('sktnurc_count');
delete_option('sktnurc_keysset');

//drop db table
global $wpdb;
$wpdb->query( "DROP TABLE IF EXISTS {$wpdb->prefix}sktnurclog" );


?>