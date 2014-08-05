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

  //Floodlight tracking code function 
  function callFloodAndThankyou() {
    /*
    Tag for Activity Group: RNIB, Activity Name: RNIB Confirmation Page, Activity ID: 1210210
    Expected URL: https://www.rnib.org.uk/ 
    Activity ID: 1210210
    Activity Name: RNIB Confirmation Page
    Activity Group Name: RNIB
    Start of DoubleClick Floodlight Tag: Please do not remove
    Activity name of this tag: RNIB Confirmation Page
    URL of the webpage where the tag is expected to be placed: https://www.rnib.org.uk/
    This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
    Creation Date: 02/01/2013
    */
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    
    $('body').append('<iframe src="https://3395873.fls.doubleclick.net/activityi;src=3395873;type=rnibo778;cat=rnibc051;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
  }  

  //Newsletter thank you message control
  if(window.location.href.indexOf("#thanks") > -1) {
    $('#form-message').slideDown("slow");
    callFloodAndThankyou();
  }
  // Close the message
  $("#form-message-close").click(function(e) {
    e.preventDefault();
    $('#form-message').slideUp("fast");  
  });

  //Floodlight tracking code function 
  function callFloodAndPDF() {
    /*
    Tag for Activity Group: RNIB, Activity Name: FactSheet Download on click, Activity ID: 1242178 -->
    Expected URL: http://www.rnibspotthesigns.org.uk 
    Activity ID: 1242178
    Activity Name: FactSheet Download on click
    Activity Group Name: RNIB

    Start of DoubleClick Floodlight Tag: Please do not remove
    Activity name of this tag: FactSheet Download on click
    URL of the webpage where the tag is expected to be placed: http://www.rnibspotthesigns.org.uk
    This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
    Creation Date: 03/07/2013
    */
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').append('<iframe src="http://3395873.fls.doubleclick.net/activityi;src=3395873;type=rnibo778;cat=facts860;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
  }

  // PDF download tracking trigger click event
  $("a.pdf-download").click(function(e) {
    // Trigger the code.
    callFloodAndPDF();
    // Send the user back on their journey
    var url = $(this).attr('href');
    window.location.href = url;
    return false;

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

  // Options for the flexslider
  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "&#9668; Previous slide",          
    nextText: "&#9658; Next slide",
    keyboard: false,
    pausePlay: true,
    pauseText: 'Pause slideshow',
    playText: 'Play slideshow'
  });

  if ($("html").hasClass("lt-ie10")) {
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
            media: '4owg8nVpLyE',
            logoURL : 'http://rnib.org.uk'
          });
      });
    });
  } else {
      /**
      * Enquire code for media query manipulation of the DOM
      * http://wicky.nillia.ms/enquire.js/#responding-to-queries
      * https://github.com/WickyNilliams/enquire.js
      */

      // Store the mobile replacement video
      var standardYouTubeMarkup = '<iframe id="main-youtube" class="youtube" width="300" height="169" src="http://www.youtube.com/watch?v=14Dd6yTi5pk" frameborder="0" allowfullscreen></iframe>';
      var accessbileMarkup = '<a href="http://www.youtube.com/watch?v=14Dd6yTi5pk">RNIB advert on Youtube</a>';
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
                    media: '4owg8nVpLyE',
                    logoURL : 'http://rnib.org.uk'
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
  }
});