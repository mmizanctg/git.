$(function(){
   var menuTopOffset =$('#header').offset().top
   $(window).on('scroll',function(){
      var scrollSize =$(window).scrollTop()
      if(scrollSize >menuTopOffset){
         $('#header').addClass('stickymenu')
      }else{
         $('#header').removeClass('stickymenu') 
      }
      

      if(scrollSize < 1000){
         $('.bottomTop').hide(600)
      }else{
         $('.bottomTop').show(600) 
      }
   })
   $('.bottomTop').on('click',function(){
      $('html,body').animate({
         scrollTop:0
      },1000)
   })
   //slick slider js start
   $('#banner').slick({
      arrows:false,
      autoplay:true,
      autoplaySpeed:2000,
      speed:700,
      dots:true,
      dotsClass: 'banner_slick_dots',
   });

   //Venobox for work section
   $('.venobox').venobox({
      spinner:'wave',
      spinColor:'#4BCAFF',
      titleattr: 'data-title',
   });

   //Wow Js Code
   new WOW().init();

   // Counter JS code
   $('.counter').counterUp({
      delay: 10,
      time: 1500,
  });


  //Smoot scroll
  $("a").on('click', function(event) {

   if (this.hash !== "") {

     event.preventDefault();

     var hash = this.hash;

     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
   }
});
})
