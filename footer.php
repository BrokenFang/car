<footer>
  <div class="container">
    <div class="row">
      <div class="four columns">
        <p class="logo">Smart <b>Repair</b></p>
        <p><span class="fontawesome-home"></span>ul.Tama Pomorzańska 13, Szczecin</p>
        <p><span class="fontawesome-phone"></span>530-828-557</p>
      </div>
      <div class="eight columns">
	<?php wp_nav_menu( array('container' => false, 'menu_class' => 'u-pull-right', 'theme_location' => 'home', 'walker' => new wp_bootstrap_navwalker() )); ?>
      </div>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-2.1.4.min.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.cycle.lite.js"></script>

<script async src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
</body>
</html>
