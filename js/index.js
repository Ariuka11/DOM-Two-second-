// Your code goes here


//Focus event - focus, blur

//CSS Animation Events

//Mouse events

 //mouseover
 const navBar = document.querySelectorAll(".navbar-brand");
 navBar.forEach(function(item){
     item.addEventListener("mouseover", (event)=>{
         TweenMax.to(".navbar-brand", 3, 
         {opacity:1.5, 
           
             scale:1.1, 
            ease:SlowMo.easeIn })
         event.preventDefault();
     })
 });

 //keydown
 const form = document.querySelector('.form');
 form.addEventListener('keydown', e => {
     TweenMax.from(form, 3, {
        y:50,
        });
     e.stopPropagation();
    
 } )
//  //wheel
 const mapImg = document.querySelector('.map-image');
 mapImg.addEventListener('wheel', e => {
     TweenMax.from(mapImg, 3, {
         x:1200,
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

//  //drag / drop
 const headerImg = document.querySelector('.headerImg');
 headerImg.addEventListener('drag', e => {
     TweenMax.to(headerImg, 4, {
         x: -100,           
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

//  //load
 const nav = document.querySelector('.content-destination img');
 nav.addEventListener('load', e => {
     TweenMax.from(nav, 3, {
         x: -100,
         opacity: 0,
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

//  //focus
 
 window.addEventListener('focus', e => {
     TweenMax.from('p', 3, {
         x:1200,
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

 //resize

 window.addEventListener('resize', e => {
     TweenMax.from('h2', 0.5, {
         opacity: 1.5,
         scale: 1.1,
        
        });
        
 } )

//  //scroll
 
window.addEventListener('scroll', e => {
     TweenMax.from('h1', 6, {
         x: 200,
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

//  //select

 window.addEventListener('select', e => {
     TweenMax.to('button', 3, {
         y:100,
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

//  //dblclick

 const images = document.querySelector('.img-fluid');
 images.addEventListener('dblclick', e => {
     TweenMax.from(images, 3, {
         x:1200,
         ease: Back.easeOut
        });
     e.stopPropagation();
     e.preventDefault();
 } )

//