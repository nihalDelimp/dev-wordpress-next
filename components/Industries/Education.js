import React from 'react';
import Footer from '../Footer/Footer';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeaderTwo from '../Header/HeaderTwo';



function Education({ educationData }) {
   return (
      <>
         <HeaderTwo />
         <div>
            <section id="industry-section_1" style={{ backgroundColor: 'rgb(2,0,36)' }} className="wow fadeInUp bg-gradient section">
               <div id="industry-container" className="container-lg pt-4 pb-4">
                  <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
                     <div className="col-lg-12 text-left">
                        <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                           <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                           <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Industries :Education</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="row">
                     <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{educationData[0]?.heading}</h1>
                        <p className="text-white font-medium extra-large">{educationData[0]?.description}</p>
                     </div>
                     <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
                        <img className="w-100" src={educationData[0]?.image?.sourceUrl} />
                     </div>
                  </div>
               </div>
            </section>

            <section id="industry-section_2" className="wow fadeInUp section bg-section-grey-1" data-wow-duration="2s" data-wow-delay="250ms">
               <div id="industry-container" className="container-lg">
                  <div className="row pt-4 pb-4 pt-lg-5 pb-lg-5">
                     <div className="col-lg-6 my-auto wow slideInRight  pt-4 pb-4" data-wow-duration="2s" data-wow-delay="250ms">
                        <h1 className="text-primary font-bold  bottom-buffer-1point5rem">
                           {educationData[1]?.heading}
                        </h1>
                        <p className="extra-large" style={{ color: "#808080" }}>{educationData[1]?.description}</p>
                     </div>
                     <div className="col-lg-6 wow slideInLeft  pl-lg-8" data-wow-duration="2s" data-wow-delay="250ms">
                        {educationData[1]?.listItems && educationData[1]?.listItems.length > 0 &&
                           educationData[1].listItems.map((item, index) =>
                           (<div key={index + 1} className="row mb-3">
                              <div className="col-lg-1 mb-2">
                                 <h1 className="alt-primary text-numbers">{item?.icon}</h1>
                              </div>
                              <div className="col-lg-11 mt-2 mb-2">
                                 <p className=" extra-big" style={{ color: "#808080" }}>{item.description}</p>
                              </div>
                           </div>)
                           )}
                     </div>
                  </div>
               </div>
            </section>

            <section id="industry-section_3" style={{ backgroundColor: 'rgb(2,0,36)' }} className="wow fadeInUp bg-gradient section">
               <div id="industry-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
                  <div className="row">
                     <div className="col-lg-12 text-center pb-4 pt-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h1 className="text-white font-bold  bottom-buffer-2point5rem">{educationData[2]?.heading}</h1>
                        <p className="text-white extra-big font-medium ">{educationData[2]?.description}</p>
                     </div>
                  </div>
                  <div className="row">
                     {educationData[2].cardBox && educationData[2].cardBox.length > 0 &&
                        educationData[2].cardBox.map((item, index) =>
                           index <= 2 && (
                              <div key={index + 1} className="col-lg text-center text-white pb-4 pt-4 wow fadeInUp" data-wow-delay="1s">
                                 <div className="p-4 h-100" style={{ border: "2px solid white" }}>
                                    <p><img className="img-fluid gov-icon-image" src={item.image?.sourceUrl} /></p>
                                    <p className="text-white extra-big pb-2 pt-2">{item?.description}</p>
                                 </div>
                              </div>)
                        )
                     }
                  </div>

                  <div className="row justify-content-center">
                     {educationData[2].cardBox && educationData[2].cardBox.length > 0 &&
                        educationData[2].cardBox.map((item, index) =>
                           index >= 3 && index <= 4 && (
                              <div key={index + 1} className="col-lg-4 text-center text-white pb-4 pt-4 wow fadeInUp" data-wow-delay="1s">
                                 <div className="p-4 h-100" style={{ border: "2px solid white" }}>
                                    <p><img className="img-fluid gov-icon-image" src={item.image?.sourceUrl} /></p>
                                    <p className="text-white extra-big pb-2 pt-2">{item?.description}</p>
                                 </div>
                              </div>)
                        )
                     }
                  </div>

               </div>
            </section>

            <section id="top-clients-section" className="wow section">
               <div id="top-clients-container" className="container-lg pb-4 pt-4">
                  <div className="row pb-4 pt-4 wow pulse" data-wow-duration="2s">
                     <div className="col-12 text-center">
                        <h1 className="font-weight-bold">{educationData[3]?.heading}</h1>
                     </div>
                  </div>
                  <div className="row pb-4 pt-4 wow" data-wow-duration="0.3s">
                     <div className="col-lg-12 animate__animated animate__fadeInDown">
                        <Swiper
                           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                           spaceBetween={0}
                           slidesPerView={4}
                           navigation
                           loop={true}
                           speed={5000}
                           autoplay={{
                              delay: 100,
                              pauseOnMouseEnter: true,
                           }}
                           breakpoints={{
                              640: {
                                 slidesPerView: 1,
                              },
                              1024: {
                                 slidesPerView: 2,
                              },
                              1200: {
                                 slidesPerView: 4,
                              },
                           }}
                        >
                           {educationData[3].carouselImages && educationData[3].carouselImages.length > 0 &&
                              educationData[3].carouselImages.map((item, index) =>
                                 <SwiperSlide key={index + 1} > <div className="swiper-slide text-center">
                                    <img className="w-100" src={item.sourceUrl} />
                                 </div>
                                 </SwiperSlide>
                              )}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </section>
            <Footer />
         </div>
      </>
   )
}

export default Education
