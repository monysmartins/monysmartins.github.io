$(document).ready(function (){

  var positionResumeAbout = $('#resume-about').offset();
  var positionExperience1 = $('#experience1').offset();
  var positionExperience2 = $('#experience2').offset();
  var positionExperience3 = $('#experience3').offset();
  var positionExperience4 = $('#experience4').offset();
  var positionExperience5 = $('#experience5').offset();
  var positionExperience6 = $('#experience6').offset();

  var positionEducation1 = $('#education1').offset();
  var positionEducation2 = $('#education2').offset();
  
  var widthScreen = $(window).width();
  if (widthScreen > 768){
    $(window).scroll(function (){
      var positionScroll = $(this).scrollTop();
      var diference = $(window).height() + 40;
      if (positionScroll > positionResumeAbout.top - diference){
        addAnime($('#resume-about'), 'bounceInUp');
      }

      if (positionScroll > positionExperience1.top - diference){
        addAnime($('#experience1'), 'bounceInRight');
      }

      if (positionScroll > positionExperience2.top - diference){
        addAnime($('#experience2'), 'bounceInLeft');
      }

      if (positionScroll > positionExperience3.top - diference){
        addAnime($('#experience3'), 'bounceInRight');
      }

      if (positionScroll > positionExperience4.top - diference){
        addAnime($('#experience4'), 'bounceInLeft');
      }

      if (positionScroll > positionExperience5.top - diference){
        addAnime($('#experience5'), 'bounceInRight');
      }

      if (positionScroll > positionExperience6.top - diference){
        addAnime($('#experience6'), 'bounceInLeft');
      }



      if (positionScroll > positionEducation1.top - diference){
        addAnime($('#education1'), 'bounceInRight');
      }

      if (positionScroll > positionEducation2.top - diference){
        addAnime($('#education2'), 'bounceInRight');
      }
    });
  }
});


function addAnime(input, effect){

  $(input).addClass('animated '+ effect);
}
