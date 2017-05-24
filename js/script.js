$(window).on('load', function (e) {
  //FitVids
  $("#reel-container").fitVids();

  //Add & Remove Background Images here
  var backgroundThumbnailImages = ["video-1-thumbnail.jpg", "video-2-thumbnail.jpg", "video-3-thumbnail.jpg", "video-4-thumbnail.jpg", "video-5-thumbnail.jpg", "video-6-thumbnail.jpg", "video-7-thumbnail.jpg", "video-8-thumbnail.jpg"];
  $("#introduction").css({"background-image": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/work/" + backgroundThumbnailImages[Math.floor(Math.random() * backgroundThumbnailImages.length)] + ")"});

  //Applying background images to the Video Thumbnail Containers
  var totalThumbnails = backgroundThumbnailImages.length;
  for (var i = 0; i < totalThumbnails; i++) {
    $(".video-thumbnail-container:nth-child(" + [i+1] +")").css({"background-image": "url(img/work/" + backgroundThumbnailImages[i] + ")"});
  }

  //Adding the copyright date
  var date = new Date();
  var year = date.getFullYear();
  $("#footer").html("Copyright &copy; " + year + " Kaushal Shah");

  //Change color of the menu on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#menu').css("background-color", "#000");
      $('#menu').css("border-bottom", "1px solid #fff");
    } else {
      $('#menu').css("background-color", "transparent");
      $('#menu').css("border-bottom", "none");
    }
  });

  //When clicking on Arrow Down
  $("#arrow-downward").click(function () {
    $("html, body").animate({
      scrollTop: $("#work").offset().top
    }, "slow");
  });

  //When clicking on Work
  $("#menu-item-2").click(function () {
    $("html, body").animate({
      scrollTop: $("#work").offset().top
    }, "slow");
  });

  //When clicking on Reel
  $("#menu-item-3").click(function () {
    $("html, body").animate({
      scrollTop: $("#reel").offset().top
    }, "slow");
  });

  //When hovering over the Video Thumbnail Containers
  $(".video-thumbnail-container").hover(function () {
    $(this).find(".video-thumbnail-text").toggleClass("show-video-thumbnail-text");
  });

  // Media Query
  var mediaQuery = window.matchMedia( "(max-width: 700px)" );
  if (mediaQuery.matches) {
    //When clicking on About
    $("#menu-item-1").click(function () {
      $("#about").show("slide",{
        direction: "left"
      },"slow");
    });

    //When clicking on Close About Button
    $("#close-about").click(function () {
      $("#about").hide("slide",{
        direction: "left"
      }, "slow");
    });

    //When clicking on Contact
    $("#menu-item-4").click(function () {
      $("#contact").show("slide",{
        direction: "right"
      }, "slow");
    });

    //When clicking on Close Contact Button
    $("#close-contact").click(function () {
      $("#contact").hide("slide",{
        direction: "right"
      }, "slow");
    });

    //When clicking on All
    $("#sub-menu-item-1").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-1").css ("color", "#777");
      $(".video-thumbnail-container").css("display", "flex");
    });

    //When clicking on Narrative
    $("#sub-menu-item-2").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-2").css ("color", "#777");
      $(".video-thumbnail-container").css("display", "flex");
      $(".commercial").css("display", "none");
      $(".documentary").css("display", "none");
      $(".music-video").css("display", "none");
    });

    //When clicking on Commercial
    $("#sub-menu-item-3").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-3").css ("color", "#777");
      $(".video-thumbnail-container").css("display", "flex");
      $(".narrative").css("display", "none")
      $(".documentary").css("display", "none")
      $(".music-video").css("display", "none")
    });

    //When clicking on Documentary
    $("#sub-menu-item-4").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-4").css ("color", "#777");
      $(".video-thumbnail-container").css("display", "flex");
      $(".narrative").css("display", "none")
      $(".commercial").css("display", "none")
      $(".music-video").css("display", "none")
    });

    //When clicking on Music Video
    $("#sub-menu-item-5").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-5").css ("color", "#777");
      $(".video-thumbnail-container").css("display", "flex");
      $(".narrative").css("display", "none")
      $(".commercial").css("display", "none")
      $(".documentary").css("display", "none")
    });

    //When clicking on a project
    $(".video-thumbnail-container").click(function () {
      $("#project").show("slide",{
        direction: "down"
      },"slow");
    });

    //When clicking on the close project button
    $("#close-project").click(function () {
      $("#project").hide("slide",{
        direction: "down"
      }, "slow");
    });
  } else {
    //When clicking on About
    $("#menu-item-1").click(function () {
      $("#contact").hide();
      $("#menu-item-4").css("color", "#fff");
      $("#about").fadeIn();
      $("#menu-item-1").css("color", "#777");
    });

    //When clicking on Close About Button
    $("#close-about").click(function () {
      $("#about").fadeOut();
      $("#menu-item-1").css("color", "#fff");
    });

    //When clicking on Contact
    $("#menu-item-4").click(function () {
      $("#about").hide();
      $("#menu-item-1").css("color", "#fff");
      $("#contact").fadeIn();
      $("#menu-item-4").css("color", "#777");
    });

    //When clicking on Close Contact Button
    $("#close-contact").click(function () {
      $("#contact").fadeOut();
      $("#menu-item-4").css("color", "#fff");
    });

    //When clicking on All
    $("#sub-menu-item-1").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-1").css ("color", "#777");
      $(".video-thumbnail-container").css("filter", "brightness(100%)");
      $(".video-thumbnail-text").css("display", "flex");
    });

    //When clicking on Narrative
    $("#sub-menu-item-2").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-2").css ("color", "#777");
      $(".video-thumbnail-container").css("filter", "brightness(100%)");
      $(".video-thumbnail-text").css("display", "flex");
      $(".commercial").css("filter", "brightness(10%)");
      $(".commercial .video-thumbnail-text").css("display", "none");
      $(".documentary").css("filter", "brightness(10%)");
      $(".documentary .video-thumbnail-text").css("display", "none");
      $(".music-video").css("filter", "brightness(10%)");
      $(".music-video .video-thumbnail-text").css("display", "none");
    });

    //When clicking on Commercial
    $("#sub-menu-item-3").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-3").css ("color", "#777");
      $(".video-thumbnail-container").css("filter", "brightness(100%)");
      $(".video-thumbnail-text").css("display", "flex");
      $(".narrative").css("filter", "brightness(10%)");
      $(".narrative .video-thumbnail-text").css("display", "none")
      $(".documentary").css("filter", "brightness(10%)");
      $(".documentary .video-thumbnail-text").css("display", "none")
      $(".music-video").css("filter", "brightness(10%)");
      $(".music-video .video-thumbnail-text").css("display", "none")
    });

    //When clicking on Documentary
    $("#sub-menu-item-4").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-4").css ("color", "#777");
      $(".video-thumbnail-container").css("filter", "brightness(100%)");
      $(".video-thumbnail-text").css("display", "flex");
      $(".narrative").css("filter", "brightness(10%)");
      $(".narrative .video-thumbnail-text").css("display", "none")
      $(".commercial").css("filter", "brightness(10%)");
      $(".commercial .video-thumbnail-text").css("display", "none")
      $(".music-video").css("filter", "brightness(10%)");
      $(".music-video .video-thumbnail-text").css("display", "none")
    });

    //When clicking on Music Video
    $("#sub-menu-item-5").click(function () {
      $(".sub-menu-items").css("color", "#fff");
      $("#sub-menu-item-5").css ("color", "#777");
      $(".video-thumbnail-container").css("filter", "brightness(100%)");
      $(".video-thumbnail-text").css("display", "flex");
      $(".narrative").css("filter", "brightness(10%)");
      $(".narrative .video-thumbnail-text").css("display", "none")
      $(".commercial").css("filter", "brightness(10%)");
      $(".commercial .video-thumbnail-text").css("display", "none")
      $(".documentary").css("filter", "brightness(10%)");
      $(".documentary .video-thumbnail-text").css("display", "none")
    });
  }

  //When clicking on a project
  $(".video-thumbnail-container").click(function () {
    var projectTitle = $(this).find(".video-thumbnail-text").text();
    var projectVideo = $(this).find(".video-embed-code").html();
    $("#slide").html(projectVideo);
    $("#project").fadeIn();

    //FitVids
    $("#slide").fitVids();
  });

  //When clicking on the close project button
  $("#close-project").click(function () {
    $("#slide").html("");
    $("#project").fadeOut();
  });
});
