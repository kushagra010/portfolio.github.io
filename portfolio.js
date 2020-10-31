$(document).ready(function(){
	let hamburger=document.querySelector('.hamburger');
	let cross=document.querySelector('.cross');
	let mobileNav=document.querySelector('.mobile-nav');
	hamburger.addEventListener('click', function(){
		mobileNav.classList.add('open');
	});
	cross.addEventListener('click', function(){
		mobileNav.classList.remove('open');
	});
	$(".mobile-nav .nav-list").on("click", function () {
  		mobileNav.classList.remove('open');
  	});
	$('.mobile-nav li a[href*="#"]:not([href="#"])').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top -40,
      }
    );
  });
});