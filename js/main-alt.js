$(function() {
    
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




  /**
  * Enquire code for media query manipulation of the DOM
  * http://wicky.nillia.ms/enquire.js/#responding-to-queries
  * https://github.com/WickyNilliams/enquire.js
  */

  // Store the mobile replacement video
  var standardYouTubeMarkup = '<iframe id="main-youtube" class="youtube" width="300" height="169" src="http://www.youtube.com/embed/hRO-53fGEFQ?rel=0" frameborder="0" allowfullscreen></iframe>';
  var accessbileMarkup = '<a href="http://www.youtube.com/watch?v=hRO-53fGEFQ">RNIB Bus video</a>';
  enquire.register("screen and (min-width:850px)", {

    match : function() {
      (function(){
      
        //Removes the mobile youtube player.
        $('.embed').children('#main-youtube').remove();
        //Adds the previously removed mark up and ID required by the video
        $('.embed').append(accessbileMarkup);      

        $(document).ready(function(){
          // Find all links to videos on youtube
          var $yt_links = $("a[href*='http://www.youtube.com/watch']");
          // Create players for our youtube links
          $.each($yt_links, function(i) {
              var $holder = $('<span />');
              $(this).parent().replaceWith($holder);
              // Find the captions file if it exists
              var $mycaptions = $(this).siblings('.captions');
              // Work out if we have captions or not
              var captionsf = $($mycaptions).length > 0 ? $($mycaptions).attr('href') : null;
              // Ensure that we extract the last part of the youtube link (the video id)
              // and pass it to the player() method
              var link = $(this).attr('href').split("=")[1];
              // Initialise the player
              $holder.player({
                id: 'yt',
                useHtml5 : true,
                media: 'hRO-53fGEFQ',
                logoURL : 'http://rnib.local/',
              });
          });
        });
      
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

  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "Previous slide",          
    nextText: "Next slide",
    keyboard: false,
    pausePlay: true,
    pauseText: 'Pause slideshow',
    playText: 'Play slideshow'
  });
});