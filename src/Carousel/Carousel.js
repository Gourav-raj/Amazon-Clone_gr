import React, { Component } from 'react';
import $ from 'jquery';

import CarouselItem from './../CarouselItem/CarouselItem';
import './carousel.css';



export default class Carousel extends Component{

  componentDidMount(){



  let carouselItems = $('.carousel-items');
  let scrollDistance = 0;
  $('.right-arrow').on('click', function(){


    scrollDistance += 300;
    $(this).prev().stop().animate({scrollLeft: scrollDistance})
    console.log(scrollDistance);

  }); 

  $('.left-arrow').on('click', function(){

    scrollDistance -= 300;
    $(this).next().stop().animate({scrollLeft: scrollDistance})
    console.log(scrollDistance);
  })




// //SET COLOR BORDER FOR CAROUSEL ITEMS
// let colors = ['#82D8E3','#ADE422','#FFA724','#FF5252','#82D8E3'];
//
// //THEN LOOP THROUGH AND ASSIGN EACH IT'S RESPECTIVE COLOR
// let bordersArray = [...document.querySelectorAll('.colored-border-div')];
// bordersArray.map((val,i)=> val.style.background = colors[i])
//










    // let carouselItems = document.querySelector('.carousel-items');
    // let scrollDistance = 0;
    // let maxScrollDistance = 100;
    // carouselItems.scrollLeft = 0;
    //
    //
    // document.querySelector('.arrow-right').addEventListener('click', function(e){
    //   e = e || window.event;
    //   e.preventDefault();
    //   console.log(e.defaultPrevented);
    //
    //   if(scrollDistance < maxScrollDistance){
    //     animateScrollRight();
    //   }
    // });
    //
    // document.querySelector('.arrow-left').addEventListener('click', function(e){
    //   e = e || window.event;
    //   e.preventDefault();
    //
    //   // if(scrollDistance !== 0){
    //     animateScrollLeft();
    //
    //   // }
    // });
    //
    // function animateScrollRight(){
    //   var pos = carouselItems.scrollLeft;
    //   var stop = carouselItems.scrollLeft += 20;
    //   var id = setInterval(frame, 10);
    //   function frame() {
    //
    //     if (pos == stop) {
    //         clearInterval(id);
    //     } else {
    //         pos++;
    //         carouselItems.scrollLeft = pos;
    //         carouselItems.scrollLeft = pos;
    //     }
    //   }
    // }
    // function animateScrollLeft(){
    //   console.log(carouselItems.scrollLeft);
    //   var pos = carouselItems.scrollLeft;
    //   var stop = carouselItems.scrollLeft -= 20;
    //   var id = setInterval(frame, 10);
    //   function frame() {
    //
    //     if (pos == stop) {
    //         clearInterval(id);
    //     } else {
    //         pos--;
    //         carouselItems.scrollLeft = pos;
    //         carouselItems.scrollLeft = pos;
    //     }
    //   }
    // }

  }

  render(){





    return (
      <div className='carousel-flex'>

        <div className="carousel-and-arrows">
          <img className='arrow left-arrow' src="http://i.imgur.com/kceqpG0.png" alt="left-arrow"/>

          <div className='carousel-items'>

            {this.props.carouselItemData.map((val)=>{
              return (
                <CarouselItem
                  className='item'
                  color={val.color || ''}
                  title={val.title || ''}
                  desc1={val.desc1 || ''}
                  desc2={val.desc2 || ''}
                  img={val.img || ''}
                  imageWidth={this.props.imageWidth}
                 />
              )
            })}

           {/* <CarouselItem
             className='item'
             color='#82D8E3'
             title='PRIME'
             desc1='GET FREE ONE-DAY SHIPPING'
             desc2='Order by the afternoon'
             img='http://i.imgur.com/qxfz07S.png'
           />
           <CarouselItem
             className='item'
             color='#ADE422'
             desc1='LOCAL FAVORITES DELIVERED'
             desc2='Save a trip across town'
             title='FRESH'
             img='http://i.imgur.com/m8In2Hn.png'
           />
           <CarouselItem
             className='item'
             color='#FFA724'
             desc1='START WATCHING'
             desc2='The Tick'
             title='VIDEO'
             img='http://i.imgur.com/0iAraVB.jpg'
           />
           <CarouselItem
             className='item'
             color='#FF5252'
             desc1='AMAZON MUSIC UNLIMITED'
             desc2='$10 Towards Music'
             title='MUSIC'
             img='http://i.imgur.com/jOGdecm.png'
           />
           <CarouselItem
             className='item'
             color='#82D8E3'
             desc1='VOICE CONTROL YOUR WORLD'
             desc2='Echo & Alexa Devices'
             title='MEET ALEXA'
             img='http://i.imgur.com/SIWXChR.png'
           /> */}

         </div>

         <img className='arrow right-arrow' src="http://i.imgur.com/kceqpG0.png" alt="left-arrow"/>



      </div>

    </div>
    )
  }

}
