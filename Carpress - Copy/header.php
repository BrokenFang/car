<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php bloginfo('name');?></title>
  <link href="<?php bloginfo('stylesheet_url');?>?date=<?php echo time(); ?>" rel="stylesheet">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
  <?php wp_head(); ?>
  <link href="<?php echo get_template_directory_uri(); ?>/css/animate.css" rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,3000&subset=latin-ext' rel='stylesheet' type='text/css'>
  <script src="https://maps.googleapis.com/maps/api/js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/wow.min.js"></script>
</head>

<body ontouchstart="">
  <nav>
    <div class="container">
      <a class="logo" href="/">Smart <b>Repair</b></a>
      <span onclick="toggle()" class="fontawesome-reorder u-pull-right"></span>
      <?php wp_nav_menu( array('container' => false, 'theme_location' => 'home', 'walker' => new wp_bootstrap_navwalker() )); ?>
    </div>
	<?php wp_nav_menu( array('container' => false, 'menu_class' => 'mobile', 'menu_id' => 'mob', 'theme_location' => 'home', 'walker' => new wp_bootstrap_navwalker() )); ?>
  </nav>
