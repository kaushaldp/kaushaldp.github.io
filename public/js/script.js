// By Yash Ghelani (Front-End Web Developer) - https://yashghelani.com

$(window).on("load", function (e) {
	//FitVids
	$("#reel-container").fitVids();

	//Add & Remove Background Images
	var backgroundThumbnailImages = ["video-1-thumbnail.jpg", "video-2-thumbnail.jpg", "video-3-thumbnail.jpg", "video-4-thumbnail.jpg", "video-5-thumbnail.jpg", "video-6-thumbnail.jpg", "video-7-thumbnail.jpg", "video-8-thumbnail.jpg"];

	//Apply a random background image with a gradient over it
	$("#introduction").css({"background-image": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/work/" + backgroundThumbnailImages[Math.floor(Math.random() * backgroundThumbnailImages.length)] + ")"});

	//Applying background images to the Video Thumbnail Containers
	var totalThumbnails = backgroundThumbnailImages.length;
	for (var i = 0; i < totalThumbnails; i++) {
		$(".project-thumbnail:nth-child(" + [i+1] +")").css({"background-image": "url(img/work/" + backgroundThumbnailImages[i] + ")"});
	}

	//Change color of the menu on scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$("#menu").css("background-color", "#000");
			$("#menu").css("border-bottom", "1px solid #fff");
		} else {
			$("#menu").css("background-color", "transparent");
			$("#menu").css("border-bottom", "none");
		}
	});

	//When clicking on Arrow Down
	$("#arrow-downward").click(function () {
		$("html, body").animate({
			scrollTop: $("#reel").offset().top
		}, "slow");
	});

	//When clicking on Reel
	$("#menu-item-1").click(function () {
		$("html, body").animate({
			scrollTop: $("#reel").offset().top
		}, "slow");
	});

	//When clicking on Work
	$("#menu-item-2").click(function () {
		$("html, body").animate({
			scrollTop: $("#work").offset().top
		}, "slow");
	});

	//When clicking on Info
	$("#menu-item-3").click(function () {
		$("html, body").animate({
			scrollTop: $("#info").offset().top
		}, "slow");
	});

	//When hovering over the Video Thumbnail Containers
	$(".project-thumbnail").hover(function () {
		$(this).find(".project-thumbnail-text").toggleClass("show-project-thumbnail-text");
	});

	// Media Query
	var mediaQuery = window.matchMedia( "(max-width: 700px)" );
	if (mediaQuery.matches) {
		//When clicking on All
		$("#sub-menu-item-1").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-1").css ("color", "#777");
			$(".project-thumbnail").css("display", "flex");
		});

		//When clicking on Narrative
		$("#sub-menu-item-2").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-2").css ("color", "#777");
			$(".project-thumbnail").css("display", "flex");
			$(".commercial").css("display", "none");
			$(".documentary").css("display", "none");
			$(".music-video").css("display", "none");
		});

		//When clicking on Commercial
		$("#sub-menu-item-3").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-3").css ("color", "#777");
			$(".project-thumbnail").css("display", "flex");
			$(".narrative").css("display", "none")
			$(".documentary").css("display", "none")
			$(".music-video").css("display", "none")
		});

		//When clicking on Documentary
		$("#sub-menu-item-4").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-4").css ("color", "#777");
			$(".project-thumbnail").css("display", "flex");
			$(".narrative").css("display", "none")
			$(".commercial").css("display", "none")
			$(".music-video").css("display", "none")
		});

		//When clicking on Music Video
		$("#sub-menu-item-5").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-5").css ("color", "#777");
			$(".project-thumbnail").css("display", "flex");
			$(".narrative").css("display", "none")
			$(".commercial").css("display", "none")
			$(".documentary").css("display", "none")
		});
	} else {
		//When clicking on All
		$("#sub-menu-item-1").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-1").css ("color", "#777");
			$(".project-thumbnail").css("filter", "brightness(100%)");
			$(".project-thumbnail-text").css("display", "flex");
		});

		//When clicking on Narrative
		$("#sub-menu-item-2").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-2").css ("color", "#777");
			$(".project-thumbnail").css("filter", "brightness(100%)");
			$(".project-thumbnail-text").css("display", "flex");
			$(".commercial").css("filter", "brightness(10%)");
			$(".commercial .project-thumbnail-text").css("display", "none");
			$(".documentary").css("filter", "brightness(10%)");
			$(".documentary .project-thumbnail-text").css("display", "none");
			$(".music-video").css("filter", "brightness(10%)");
			$(".music-video .project-thumbnail-text").css("display", "none");
		});

		//When clicking on Commercial
		$("#sub-menu-item-3").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-3").css ("color", "#777");
			$(".project-thumbnail").css("filter", "brightness(100%)");
			$(".project-thumbnail-text").css("display", "flex");
			$(".narrative").css("filter", "brightness(10%)");
			$(".narrative .project-thumbnail-text").css("display", "none")
			$(".documentary").css("filter", "brightness(10%)");
			$(".documentary .project-thumbnail-text").css("display", "none")
			$(".music-video").css("filter", "brightness(10%)");
			$(".music-video .project-thumbnail-text").css("display", "none")
		});

		//When clicking on Documentary
		$("#sub-menu-item-4").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-4").css ("color", "#777");
			$(".project-thumbnail").css("filter", "brightness(100%)");
			$(".project-thumbnail-text").css("display", "flex");
			$(".narrative").css("filter", "brightness(10%)");
			$(".narrative .project-thumbnail-text").css("display", "none");
			$(".commercial").css("filter", "brightness(10%)");
			$(".commercial .project-thumbnail-text").css("display", "none");
			$(".music-video").css("filter", "brightness(10%)");
			$(".music-video .project-thumbnail-text").css("display", "none");
		});

		//When clicking on Music Video
		$("#sub-menu-item-5").click(function () {
			$(".sub-menu-items").css("color", "#fff");
			$("#sub-menu-item-5").css ("color", "#777");
			$(".project-thumbnail").css("filter", "brightness(100%)");
			$(".project-thumbnail-text").css("display", "flex");
			$(".narrative").css("filter", "brightness(10%)");
			$(".narrative .project-thumbnail-text").css("display", "none");
			$(".commercial").css("filter", "brightness(10%)");
			$(".commercial .project-thumbnail-text").css("display", "none");
			$(".documentary").css("filter", "brightness(10%)");
			$(".documentary .project-thumbnail-text").css("display", "none");
		});
	}

	//When clicking on a project
	$(".project-thumbnail").click(function () {
		$("#project").show();
		var projectTitle = $(this).find(".project-thumbnail-text").text();
		var projectVideo = $(this).find(".video-embed-code").html();
		$("#project-slide").html(projectVideo);

		//FitVids
		$("#project-slide").fitVids();
	});

	//When clicking on the close project button
	$("#close-project-button").click(function () {
		$("#project-slide").html("");
		$("#project").hide();
	});

	//Adding the copyright text
	var date = new Date();
	var year = date.getFullYear();
	$("#footer").html("Copyright &copy; " + year + " Kaushal Shah");
});
