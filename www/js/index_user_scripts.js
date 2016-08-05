/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Login */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_1"); 
         return false;
    });
    
        /* button  #button_login */
    $(document).on("click", "#button_login", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_2"); 
         return false;
    });
    
        /* button  #button_pw_reset */
    $(document).on("click", "#button_pw_reset", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_67_54"); 
         return false;
    });
    
        /* button  #button_menu */
    $(document).on("click", "#button_menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar_main_menu"));  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
