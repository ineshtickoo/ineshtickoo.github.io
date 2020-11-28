

const about = document.querySelector("#about")
const work = document.querySelector("#work")
const contact = document.querySelector("#contact")
const stuff = document.querySelector("#stuff")
const body = document.querySelector("body")
$(about).hover(function(){    
  $(this).css("-webkit-text-fill-color", "#ff6626");
  $(this).css("color", "#ff6626");
  $(this).css("-webkit-text-stroke", "0.5px #ff6626");
  if (screen.width>600){
    $('.name').css("font-size", "5.2rem")
  }
  body.classList.add("hoverbg")
  $('.name').css("-webkit-text-stroke", "2px #ff6626");
  $('#about span').css("display", "inline")
  }, 
  function(){
  if (screen.width>600){
    $('.name').css("font-size", "5rem")
  }
  body.classList.remove("hoverbg")
  $(this).css("-webkit-text-fill-color", "transparent");
  $(this).css("-webkit-text-stroke", "0.5px white");
  $('.name').css("-webkit-text-stroke", "1px white");
  $('.navitem span').css("display", "none")
});

$(work).hover(function(){    
  $(this).css("-webkit-text-fill-color", "#80a6ff");
  $(this).css("color", "#80a6ff");
  $(this).css("-webkit-text-stroke", "0.5px #80a6ff");
  if (screen.width>600){
    $('.name').css("font-size", "5.2rem")
  }
  body.classList.add("hoverbg")
  $('.name').css("-webkit-text-stroke", "2px #80a6ff");
  $('#work span').css("display", "inline")
  }, 
  function(){
  if (screen.width>600){
    $('.name').css("font-size", "5rem")
  }
  body.classList.remove("hoverbg")
  $(this).css("-webkit-text-fill-color", "transparent");
  $(this).css("-webkit-text-stroke", "0.5px white");
  $('.name').css("-webkit-text-stroke", "1px white");
  $('.navitem span').css("display", "none")
});

$(contact).hover(function(){    
  $(this).css("-webkit-text-fill-color", "#ff80bb");
  $(this).css("color", "#ff80bb");
  $(this).css("-webkit-text-stroke", "0.5px #ff80bb");
  if (screen.width>600){
    $('.name').css("font-size", "5.2rem")
  }
  body.classList.add("hoverbg")
  $('.name').css("-webkit-text-stroke", "2px #ff80bb");
  $('#contact span').css("display", "inline")
  }, 
  function(){
  if (screen.width>600){
    $('.name').css("font-size", "5rem")
  }
  body.classList.remove("hoverbg")
  $(this).css("-webkit-text-fill-color", "transparent");
  $(this).css("-webkit-text-stroke", "0.5px white");
  $('.name').css("-webkit-text-stroke", "1px white");
  $('.navitem span').css("display", "none")
});


$(stuff).hover(function(){    
  $(this).css("-webkit-text-fill-color", "#80ffa0");
  $(this).css("color", "#80ffa0");
  $(this).css("-webkit-text-stroke", "0.5px #80ffa0");
  if (screen.width>600){
    $('.name').css("font-size", "5.2rem")
  }
  body.classList.add("hoverbg")
  $('.name').css("-webkit-text-stroke", "2px #80ffa0");
  $('#stuff span').css("display", "inline")
  }, 
  function(){
  if (screen.width>600){
    $('.name').css("font-size", "5rem")
  }
  body.classList.remove("hoverbg")
  $(this).css("-webkit-text-fill-color", "transparent");
  $(this).css("-webkit-text-stroke", "0.5px white");
  $('.name').css("-webkit-text-stroke", "1px white");
  $('.navitem span').css("display", "none")
});

