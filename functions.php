<?php
require_once('wp_bootstrap_navwalker.php');

function uni_register_theme_menu() {
    register_nav_menu( 'home', 'Menu' );
}
add_action( 'init', 'uni_register_theme_menu' );

function slider_widgets_init() {

	register_sidebar( array(
		'name' => 'Menu',
		'id' => 'menu',
		'before_widget' => ' ',
		'after_widget' => ' ',
		//'before_title' => '<h2>',
		//'after_title' => '</h2>',
	) );
}
add_action( 'widgets_init', 'slider_widgets_init' );
/*wp_enqueue_script( 'google_api', 'https://maps.googleapis.com/maps/api/js', array( 'jquery' ), true );
wp_enqueue_script( 'jquery_', get_template_directory_uri() .  '/js/jquery-2.1.4.min.js', array( 'jquery' ), true );

wp_enqueue_script( 'wow', get_template_directory_uri() .  '/js/wow.min.js', array( 'jquery' ), true );
wp_enqueue_style( 'animations', get_template_directory_uri() . '/css/animate.css' );
wp_enqueue_script( 'main', get_template_directory_uri() .  '/js/main.js', array( 'jquery' ), true );*/
?>