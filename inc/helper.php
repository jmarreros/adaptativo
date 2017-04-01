<?php

// Detect if has sidebar
function has_sidebar(){

  $isHome = is_my_home();
  return ! $isHome && is_active_sidebar( 'sidebar-1' );

}


function is_my_home(){
  return is_home() || is_front_page();
}


?>
