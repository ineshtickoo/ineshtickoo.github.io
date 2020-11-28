

const about = document.querySelector("#about")
const work = document.querySelector("#work")
const contact = document.querySelector("#contact")
const stuff = document.querySelector("#stuff")
const body = document.querySelector("body")
  $(about).hover(function(){
    $(this).css("color", "yellow");
    $(this).css("-webkit-text-stroke", "0.5px yellow");
    if (screen.width>600){
      $('.name').css("font-size", "5.2rem")
    }
    $('.name').css("-webkit-text-stroke", "1px yellow");
    $('#about span').css("display", "inline")
    }, 
    function(){
    if (screen.width>600){
      $('.name').css("font-size", "5rem")
    }
    $(this).css("color", "black");
    $(this).css("-webkit-text-stroke", "0.5px white");
    $('.name').css("-webkit-text-stroke", "1px white");
    $('.navitem span').css("display", "none")
  });

  $(work).hover(function(){
    $(this).css("color", "#80a6ff");
    $(this).css("-webkit-text-stroke", "1px #80a6ff");
    if (screen.width>600){
      $('.name').css("font-size", "5.2rem")
    }
    $('.name').css("-webkit-text-stroke", "1px #80a6ff");
    $('#work span').css("display", "inline")
    }, 
    function(){
    if (screen.width>600){
      $('.name').css("font-size", "5rem")
    }
    $(this).css("color", "black");
    $(this).css("-webkit-text-stroke", "1px white");
    $('.name').css("-webkit-text-stroke", "1px white");
    $('.navitem span').css("display", "none")
  });

  $(contact).hover(function(){
    $(this).css("color", "#ff80bb");
    $(this).css("-webkit-text-stroke", "1px #ff80bb");
    if (screen.width>600){
      $('.name').css("font-size", "5.2rem")
    }
    $('.name').css("-webkit-text-stroke", "1px #ff80bb");
    $('#contact span').css("display", "inline")
    }, 
    function(){
    if (screen.width>600){
      $('.name').css("font-size", "5rem")
    }
    $(this).css("color", "black");
    $(this).css("-webkit-text-stroke", "1px white");
    $('.name').css("-webkit-text-stroke", "1px white");
    $('.navitem span').css("display", "none")
  });

  $(stuff).hover(function(){
    $(this).css("color", "#80ffa0");
    $(this).css("-webkit-text-stroke", "1px #80ffa0");
    if (screen.width>600){
      $('.name').css("font-size", "5.2rem")
    }
    $('.name').css("-webkit-text-stroke", "1px #80ffa0");
    $('#stuff span').css("display", "inline")
    }, 
    function(){
    if (screen.width>600){
      $('.name').css("font-size", "5rem")
    }
    $(this).css("color", "black");
    $(this).css("-webkit-text-stroke", "1px white");
    $('.name').css("-webkit-text-stroke", "1px white");
    $('.navitem span').css("display", "none")
  });

