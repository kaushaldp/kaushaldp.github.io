$(document).ready(function () {
  //Add & Remove Background Images here
  var backgroundThumbnailImages = ["video-1-thumbnail.jpg", "video-2-thumbnail.jpg", "video-3-thumbnail.jpg", "video-4-thumbnail.jpg", "video-5-thumbnail.jpg", "video-6-thumbnail.jpg", "video-7-thumbnail.jpg", "video-8-thumbnail.jpg"];
  $("html").css({"background-image": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/work/" + backgroundThumbnailImages[Math.floor(Math.random() * backgroundThumbnailImages.length)] + ")"});

  //Applying background images to the Video Thumbnail Containers
  var totalThumbnails = backgroundThumbnailImages.length;
  for (var i = 0; i < totalThumbnails; i++) {
    $(".video-thumbnail-container:nth-child(" + [i+1] +")").css({"background-image": "url(img/work/" + backgroundThumbnailImages[i] + ")"});
  }

  //Adding the copyright date
  var date = new Date();
  var year = date.getFullYear();
  $("footer").html("Copyright &copy; " + year + " Kaushal Shah");

  //Change color of the menu on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#menu').css("background-color", "#000");
      $('#header').css("border-bottom", "1px solid #fff");
    } else {
      $('#menu').css("background-color", "transparent");
      $('#header').css("border-bottom", "none");
    }
  });

  //When clicking on Arrow Down
  $("#arrow-downward").click(function () {
    $("html, body").animate({
        scrollTop: $("#work").offset().top
    }, 1000);
  });

  //When clicking on Work
  $("#menu-item-1").click(function () {
    $("html, body").animate({
        scrollTop: $("#work").offset().top
    }, 1000);
  });

  //When clicking on Reel
  $("#menu-item-2").click(function () {
    $("html, body").animate({
        scrollTop: $("#reel").offset().top
    }, 1000);
  });

  //When clicking on About
  $("#menu-item-3").click(function () {
    $("html, body").animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });

  //When clicking on Contact
  $("#menu-item-4").click(function () {
    $("html, body").animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });

  //When clicking on All
  $("#sub-menu-item-1").click(function () {
    $(".sub-menu-items").css("color", "#fff");
    $("#sub-menu-item-1").css ("color", "#777");
    $(".video-thumbnail-container").css("visibility", "visible");
  });

  //When clicking on Narrative
  $("#sub-menu-item-2").click(function () {
    $(".sub-menu-items").css("color", "#fff");
    $("#sub-menu-item-2").css ("color", "#777");
    $(".video-thumbnail-container").css("visibility", "visible");
    $(".commercial").css("visibility", "hidden");
    $(".documentary").css("visibility", "hidden");
    $(".music-video").css("visibility", "hidden");
  });

  //When clicking on Commercial
  $("#sub-menu-item-3").click(function () {
    $(".sub-menu-items").css("color", "#fff");
    $("#sub-menu-item-3").css ("color", "#777");
    $(".video-thumbnail-container").css("visibility", "visible");
    $(".narrative").css("visibility", "hidden");
    $(".documentary").css("visibility", "hidden");
    $(".music-video").css("visibility", "hidden");
  });

  //When clicking on Documentary
  $("#sub-menu-item-4").click(function () {
    $(".sub-menu-items").css("color", "#fff");
    $("#sub-menu-item-4").css ("color", "#777");
    $(".video-thumbnail-container").css("visibility", "visible");
    $(".narrative").css("visibility", "hidden");
    $(".commercial").css("visibility", "hidden");
    $(".music-video").css("visibility", "hidden");
  });

  //When clicking on Music Video
  $("#sub-menu-item-5").click(function () {
    $(".sub-menu-items").css("color", "#fff");
    $("#sub-menu-item-5").css ("color", "#777");
    $(".video-thumbnail-container").css("visibility", "visible");
    $(".narrative").css("visibility", "hidden");
    $(".commercial").css("visibility", "hidden");
    $(".documentary").css("visibility", "hidden");
  });

  //When hovering over the Video Thumbnail Containers
  $(".video-thumbnail-container").hover(function () {
    $(this).find(".video-thumbnail-text").toggleClass("show-video-thumbnail-text");
  });
});
