$(function() {
    
  // This is the text resizer that for accessibility. 
  $(".text-resizer a").click(function() {
    //Cache the DOM on this selector
    var rSize = $(this);
    //Find out the class on the link
    if ($(rSize).hasClass("resize-plus-two")) {
      //Add remove relevant classes on the body tag
      $("body").removeClass("large");
      $("body").addClass("largest");
    } else if ( $(rSize).hasClass("resize-plus-one") ) {
      $("body").removeClass("largest");
      $("body").addClass("large");
    } else if ( $(rSize).hasClass("resize-normal") ){
      $("body").removeClass("large largest");
    }
  });

  // Options for the flexslider
  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "Previous slide",          
    nextText: "Next slide",
    keyboard: false,
    pausePlay: true,
    pauseText: 'Pause slideshow',
    playText: 'Play slideshow'
  });

  /**
  * Sign up form JavaScript validation
  * http://docs.jquery.com/Plugins/Validation
  */

// validate signup form on keyup and submit
  $("#sign-up-form").validate({
    rules: {
      Field5: "required",
      Field6: "required",
      Field3: {
        required: true,
        email: true
      }
    },
    messages: {
      Field5: "Please enter your first name",
      Field6: "Please enter your last name",
      Field3: "Please enter a valid email address"
    }
  });  

  /**
  * Enquire code for media query manipulation of the DOM
  * http://wicky.nillia.ms/enquire.js/#responding-to-queries
  * https://github.com/WickyNilliams/enquire.js
  */

  // Store the mobile replacement video
  var standardYouTubeMarkup = '<iframe id="main-youtube" class="youtube" width="300" height="169" src="http://www.youtube.com/embed/hRO-53fGEFQ?rel=0" frameborder="0" allowfullscreen></iframe>';
 
  enquire.register("screen and (min-width:850px)", {

    match : function() {
      (function(){
      
        //Removes the mobile youtube player.
        $('.embed').children('#main-youtube').remove();
        //Adds the previously removed mark up and ID required by the video
        $('.embed').append('<div id="video-embed"></div>');      

      console.log("Match is happening.");
        var a = {};
  
        // Properties of a. 
        a.videoid = 'Xitg5oyemxQ';
        a.width = '800';
        a.height = '467';
        a.duration = '6:26';
        a.HTMLid = 'video-embed';
        a.path = 'swf/flashcontrols.swf';
  
        var flashvars = {HTMLid:a.HTMLid, videoid:a.videoid, height:a.height, width:a.width, duration:a.duration};
  
        var params = {allowFullScreen: 'false'};
  
        swfobject.embedSWF(a.path, a.HTMLid, a.width, a.height, '9', null, flashvars, params, null);
      
    })();

    },      // REQUIRED
                                // Triggered when the media query transitions 
                                // *from an unmatched state to a matched state*

    unmatch : function() {
      
      console.log("Unmached");
      (function(){
        // Removed and mark up created by the flash player
        $('.embed').children().remove();
        // Adds the embed code for the youtube player.
        $('.embed').append(standardYouTubeMarkup);
    })();


      
    },    // OPTIONAL
                                // If supplied, triggered when the media query transitions 
                                // *from a matched state to an unmatched state*.

    setup : function() {
      
      (function(){

      })();
    },      // OPTIONAL
                                // If supplied, a one-time setup function 
                                // triggered when the handler is first registered.                           

    deferSetup : true,          // OPTIONAL, defaults to false
                                // If set to true, defers execution the setup function until
                                // the media query is first matched. Setup is still triggered just once.

    destroy : function() {


    }     //OPTIONAL
                                // If supplied, triggered when a hander is unregistered (covered later). 
                                // Enables you to provide lifecycle to responsive widgets. 
                                // Put cleanup logic here.

  }).register("screen and (max-width:500px)", {

      match : function() {
          // Removed and mark up created by the flash player
          $('.embed').children().remove();
          // Adds the embed code for the youtube player.
          $('.embed').append(standardYouTubeMarkup);
      }

  }).listen();
});