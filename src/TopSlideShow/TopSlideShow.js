import React, { Component } from 'react';
import $ from 'jquery';

import Carousel from './../Carousel/Carousel';
import './topSlideShow.css';



export default class TopSlideShow extends Component{
  constructor(props){
    super(props);

    this.state = {
      slide: 0
    }
  }


  moveSlideLeft(){
    console.log(this.state.slide);
    if(this.state.slide !== 0){
      $('.slide-arrow-left').css({display: 'unset'});
      let slide = this.state.slide;
      slide -= 100;
      this.setState({
        slide: slide
      });
      let currentSlide = slide + '%';
      $('.slideshow-slide').animate({right: currentSlide});

      if(this.state.slide === 0){
        $('.slide-arrow-left').css({display: 'none'});

      } 
    }
  }

moveSlideRight(){
  $('.slide-arrow-left').css({opacity: 1});

  if(this.state.slide !== 700){
    let slide = this.state.slide;
    slide = (slide+100)%700;
   
    this.setState({
      slide: slide
    });

    let currentSlide = slide + '%';
    $('.slideshow-slide').animate({right: currentSlide});
  }
}

  render(){





    return (
      <div className='top-slide-show-main'>
        <a href='#'><h1 onClick={()=>this.moveSlideLeft()} className="slide-arrow slide-arrow-left">〈</h1></a>
        <img src="http://i.imgur.com/sYCllyG.jpg" alt="slide" className="slideshow-slide"/>
        <img src="http://i.imgur.com/fg7GbEg.jpg" alt="slide" className="slideshow-slide"/>
        <img src="http://i.imgur.com/qXCzU1P.jpg" alt="slide" className="slideshow-slide"/>
        <img src="http://i.imgur.com/Py91rgm.jpg" alt="slide" className="slideshow-slide"/>
        <img src="http://i.imgur.com/F2ER0yu.jpg" alt="slide" className="slideshow-slide"/>

        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg" alt="slide" className="slideshow-slide"/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="slide" className="slideshow-slide"/>


        <a href='#'><h1 onClick={()=>this.moveSlideRight()} className="slide-arrow slide-arrow-right">〉</h1></a>
      </div>
    )
  }

}
