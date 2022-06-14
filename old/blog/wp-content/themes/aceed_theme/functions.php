<?php   
if ( function_exists('register_sidebars') ) {
    register_sidebar(array(
        'name'=>'Сайдбар',
        'before_widget' => '<li>',
        'after_widget' => '</li>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ));  
  }
?>