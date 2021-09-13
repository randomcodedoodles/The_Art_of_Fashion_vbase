import case1 from '../../Resources/shutterstock_407632243.jpg'
import case2 from '../../Resources/shutterstock_696636346.jpg'
import case3 from '../../Resources/shutterstock_696636415.jpg'
import case4 from '../../Resources/shutterstock_1302552622.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

/*
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // configure Swiper to use modules
  Swiper.use([Navigation, Pagination]);
  */

  // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination"
//import 'swiper/components/pagination/pagination.min.css'
//import "swiper/modules/pagination/pagination.min.css"


// import Swiper core and required modules

import SwiperCore, {
  Pagination, Navigation
} from 'swiper'; 
//import SwiperCore from "swiper/core/core";
//import Swiper, { Pagination } from "swiper/js/swiper.esm";
//import { Pagination } from "swiper/modules/pagination";
//import {Swiper} from "swiper/react/swiper-react";
//import Swiper from 'swiper/dist/js/swiper'
//import Swiper from 'swiper';
import "./Gallery.css";


// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
/*
  // init Swiper:
  const swiper = new Swiper('.swiper-wrapper', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  
      slidesPerColumn: 1,
      paginationClickable: true,
      spaceBetween: 4,
      freeMode: true,
      /onSliderMove: swiperOnSliderMove,
     // onSlideChangeStart: swiperOnSliderMove,
      //onSlideChangeEnd: swiperOnSliderMove,
      //onSetTranslate: swiperOnSliderMove
      autoplay:true,

  });*/
/*
  const settings={
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
}
*/




  
export const Gallery = () => {
    /*const [swiper3,setSwiper]=useState()
    useEffect(()=>{
        setSwiper(new Swiper('.gallery',swiper3)) //setSwiper(new Swiper('.gallery',settings))
    },[])*/
    /*
    return (
        <div className="gallery">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={case1} alt="case 1" />
                    <div className="slide-text">
                        <h2>fdsgfsd</h2>
                        <p>fdsfgds</p>
                        <Link to='/contact-us'>More dsfd</Link>
                    </div>
                </div>
                <div className="swiper-slide">
                    <img src={case2} alt="case 2" />
                    <div className="slide-text">
                        <h2>fdsgfsd</h2>
                        <p>fdsfgds</p>
                        <Link to='/contact-us'>More dsfd</Link>
                    </div>
                </div>
                <div className="swiper-slide">
                    <img src={case3} alt="case 3" />
                    <div className="slide-text">
                        <h2>fdsgfsd</h2>
                        <p>fdsfgds</p>
                        <Link to='/contact-us'>More dsfd</Link>
                    </div>
                </div>
                <div className="swiper-slide">
                    <img src={case4} alt="case 4" />
                    <div className="slide-text">
                        <h2>fdsgfsd</h2>
                        <p>fdsfgds</p>
                        <Link to='/contact-us'>More dsfd</Link>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )*/

    const [bannerItems, setBannerItems] = useState([]);
        const fetchBannerItems = async () => {
            try{
                const items = await axios.get("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details");
                if(items.status === 200 || items.statusText === 'OK'){
                    setBannerItems(items.data.Details);
                }
            }catch(err){
                //setBannerItems(items.data.Errors);
            }
        }
        useEffect(() => {
            fetchBannerItems();
        }, [])
        useEffect(() => {
            console.log(bannerItems)
        }, [bannerItems])


    return (
        <div className="gallery">
            <Swiper navigation={true} pagination={{"dynamicBullets": true}} className="mySwiper">
                {bannerItems.map((_item, _index) => {
                    return (
                        <SwiperSlide className="mySlide" key={_index}>
                            <img src={_item.ImageUrl} alt="banner image" />
                            <div className="slide-text">
                                        <h1>{_item.Title}</h1>
                                        <p>{_item.Subtitle}</p>
                                        <button className="contactus-btn" onClick={()=>{}}>Contact us</button>
                                    
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
        </div>
    )
}//<div className="slide-text" data-bannerImg-src={item.ImageUrl} >

/*
<SwiperSlide className="mySlide" key={_index}>
                            <img src={_item.ImageUrl} alt="banner image" />
                            <div className="slide-text">
                                <div className="slide-title">
                                    <div className="slide-content">
                                        <h1>{_item.Title}</h1>
                                        <p>{_item.Subtitle}</p>
                                        <button className="contactus-btn" onClick={()=>{}}>Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
*/