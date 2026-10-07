$(function(){
  $(".menu-toggle").on("click",function(){
    $(".nav-menu").toggleClass("open");
    $(this).attr("aria-expanded",$(".nav-menu").hasClass("open"));
  });
  $(".nav-menu a").on("click",function(){$(".nav-menu").removeClass("open");$(".menu-toggle").attr("aria-expanded","false");});
  function header(){ $(".site-header").toggleClass("scrolled",$(window).scrollTop()>20); }
  function reveal(){ $(".reveal").each(function(){if(this.getBoundingClientRect().top<window.innerHeight-65)$(this).addClass("visible");});}
  header();reveal();$(window).on("scroll",function(){header();reveal();});
  $('a[href^="#"]').on("click",function(e){const t=$(this.getAttribute("href"));if(t.length){e.preventDefault();$("html,body").animate({scrollTop:t.offset().top-70},600);}});
  $("#year").text(new Date().getFullYear());
});