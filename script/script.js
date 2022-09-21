/* script night mode */

/* section & beg tag */
var credits = document.getElementById("credits");
var pr = document.getElementById("pr");
var footer = document.getElementById("footer_bar");
var main = document.getElementById("main_1");
var nav = document.getElementById("nav_section");
var sec = document.getElementById("section_4");
var sec3 = document.getElementById("section_3");
var sec2 = document.getElementById("section_2");

/* small tag p h1 ... h5 night mode */
var pr_section_too = document.getElementById("pr_section_foor");
var pr_section_too = document.getElementById("pr_section_too");

	function night() {
		credits.classList.toggle("black");
		pr.classList.toggle("black");
		footer.classList.toggle("black");
		nav.classList.toggle("anim");
		main.classList.toggle("black");
		sec.classList.toggle("black");
		sec3.classList.toggle("black");
		sec2.classList.toggle("black");
	/* small tag p h1 ... h5 night mode */
	pr_section_foor.classList.toggle("fff");
	pr_section_too.classList.toggle("fff");


		/* alert("kkkkkkkkk") */
	}

function header_adj() {
	if ($(window).width() < 967) {
		var header_height = $(".header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
}
function submenu_toggle() {
	if ($(window).width() < 967) {
		$(".nav-list li.with-submenu")
			.off()
			.click(function () {
				$(this).toggleClass("is-open");
				$(".submenu").slideToggle("slow");
			});
	}
}
$(document).ready(function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 967) {
		$(".hamburger").click(function () {
			$(this).toggleClass("is-active");
			$("body,html").toggleClass("sidebar-open");
			$(".nav-wrap").toggleClass("is-open");
		});

		$(".overlay").click(function () {
			$(".hamburger").removeClass("is-active");
			$("body,html").removeClass("sidebar-open");
			$(".nav-wrap").removeClass("is-open");
		});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
$(window).on("resize", function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 967) {
		$(".hamburger").click(function () {
			$(this).toggleClass("is-active");
			$("body,html").toggleClass("sidebar-open");
			$(".nav-wrap").toggleClass("is-open");
		});

		$(".overlay").click(function () {
			$(".hamburger").removeClass("is-active");
			$("body,html").removeClass("sidebar-open");
			$(".nav-wrap").removeClass("is-open");
		});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});



//ON SCROLL SHOW MENU BAR
/* if (window.matchMedia("(max-width: 700px)").matches === false) {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName("nav")[0].className = "full_nav";
    } else {
    document.getElementsByTagName("nav")[0].className = "";
    }
    }
    
    //Detect menu button click
    function nav() {
        document.getElementsByTagName("nav")[0].className = "";
    }
    }
    
    var element = document.getElementById('navLinkBox');

    document.getElementById('navToggle').addEventListener("click", expandNav);

    function expandNav() {
        element.classList.toggle("hidden");
    } */





