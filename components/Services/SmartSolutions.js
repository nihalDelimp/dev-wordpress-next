import React, { useState, useEffect } from 'react';
import CommonFooter from '../CommonFooter';
import Footer from '../Footer/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../Header/Header';


function SmartSolutions({ section1, section2, section3, section4, section5 }) {

    const sectionTwoFirstIndex = section2 && section2.sliderItems && section2.sliderItems[0] && section2.sliderItems[0].sliderItemsContent
    const sectionTwoSecondIndex = section2 && section2.sliderItems && section2.sliderItems[1] && section2.sliderItems[1].sliderItemsContent

    const sectionThreeFirstIndex = section3 && section3.sliderItems && section3.sliderItems[0] && section3.sliderItems[0].sliderItemsContent
    const sectionThreeSecondIndex = section3 && section3.sliderItems && section3.sliderItems[1] && section3.sliderItems[1].sliderItemsContent

    const sectionFourFirstIndex = section4 && section4.sliderItems && section4.sliderItems[0] && section4.sliderItems[0].sliderItemsContent
    const sectionFourSecondIndex = section4 && section4.sliderItems && section4.sliderItems[1] && section4.sliderItems[1].sliderItemsContent

    const sectionFiveFirstIndex = section5 && section5.sliderItems && section5.sliderItems[0] && section5.sliderItems[0].sliderItemsContent
    const sectionFiveSecondIndex = section5 && section5.sliderItems && section5.sliderItems[1] && section5.sliderItems[1].sliderItemsContent

    return (
        <>
            <Header />
            <ReactFullpage
                licenseKey='G4K1J-NS516-K5W16-MJ63I-NYLVP'
                responsiveWidth={1024}
                animateAnchor={true}
                lockAnchors={false}
                navigation={true}
                navigationPosition="left"
                scrollOverflow={false}
                slidesNavigation={true}
                slidesNavPosition="bottom"

                render={() => {
                    return (
                        <>
                            <section id="smart-solutions-section_1" className={`section active bg-gradient bg-size-cover bg-no-repeat bg-center ${section1?.bgImageName}`}>
                                <div id="smart-solutions-container" className="container-lg pt-4 pb-4">
                                    <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                        <section id="breadcrum-section">
                                            <div id="breadcrum-container" className="pt-1 pb-1">
                                                <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                                                    <div className="col-lg-12">
                                                        <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                                                            <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                                                            <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Smart Solutions</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="row mt-lg-2 text-center text-lg-left">
                                            <div className="col-md-12 col-sm-12">
                                                <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section1?.heading}</h1>
                                                <p className="text-white extra-big mt-lg-3">{section1.descriptionSection && section1.descriptionSection[0]?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <section id="smart-solutions-section_2" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center  ${section2?.bgImageName}`} >
                                {sectionTwoFirstIndex && sectionTwoFirstIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide"  >
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row pt-2 pb-2">
                                                    <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{sectionTwoFirstIndex[0]?.mainHeadingH1}</h1>
                                                        <p className="text-white big mb-2 mt-2"> {sectionTwoFirstIndex[1]?.description}.</p>
                                                        <p className="text-white big mb-2 mt-2">{sectionTwoFirstIndex[2]?.description}.</p>
                                                    </div>
                                                    <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                                                        <h2 className="text-white font-bold bottom-buffer-2point5rem">{sectionTwoFirstIndex[3]?.secondaryHeadingH2} :</h2>
                                                        <h3 className="text-white font-bold mb-2">{sectionTwoFirstIndex[4]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionTwoFirstIndex[5]?.description}.</p>
                                                        <h3 className="text-white font-bold mb-2 mt-3">{sectionTwoFirstIndex[6]?.headingLabelThree} </h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionTwoFirstIndex[7]?.description}.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}
                                {sectionTwoSecondIndex && sectionTwoSecondIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide">
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[0]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[1]?.description}</p>
                                                            </div>
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[2]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[3]?.description}</p>
                                                            </div>
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[4]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[5]?.description}</p>
                                                            </div>
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[6]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[7]?.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="row">
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[8]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[9]?.description}</p>
                                                            </div>
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[10]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[11]?.description}</p>
                                                            </div>
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[12]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[13]?.description}</p>
                                                            </div>
                                                            <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                                <h3 className="text-white font-bold mb-2">{sectionTwoSecondIndex[14]?.headingLabelThree}</h3>
                                                                <p className="text-white big mb-2 mt-2">{sectionTwoSecondIndex[15]?.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}
                            </section>


                            <section id="smart-solutions-section_3" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center  ${section3.bgImageName}`}>
                                {sectionThreeFirstIndex && sectionThreeFirstIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide">
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row pt-2 pb-2">
                                                    <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                        <h1 className="text-white font-bold bottom-buffer-1point5rem">{sectionThreeFirstIndex[0]?.mainHeadingH1}</h1>
                                                        <h2 className="text-white font-bold bottom-buffer-1point5rem">{sectionThreeFirstIndex[1]?.secondaryHeadingH2}</h2>
                                                        <p className="text-white big mb-1 mt-2">{sectionThreeFirstIndex[2]?.description}</p>
                                                    </div>
                                                    <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                                                        <h2 className="text-white font-bold bottom-buffer-1point5rem">{sectionThreeFirstIndex[3]?.secondaryHeadingH2} :</h2>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeFirstIndex[4]?.description}</p>
                                                        <h3 className="text-white font-bold mb-2 mt-3">{sectionThreeFirstIndex[5]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeFirstIndex[6]?.description}.</p>
                                                        <h3 className="text-white font-bold mb-2 mt-3">{sectionThreeFirstIndex[7]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeFirstIndex[8]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}
                                {sectionThreeSecondIndex && sectionThreeSecondIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide">
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionThreeSecondIndex[0]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeSecondIndex[1]?.description}</p>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionThreeSecondIndex[2]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeSecondIndex[3]?.description}</p>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionThreeSecondIndex[4]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeSecondIndex[5]?.description}</p>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionThreeSecondIndex[6]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionThreeSecondIndex[7]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}
                            </section>

                            <section id="smart-solutions-section_4" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center  ${section4?.bgImageName}`}>
                                {sectionFourFirstIndex && sectionFourFirstIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide">
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row pt-2 pb-2">
                                                    <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                        <h1 className="text-white font-bold bottom-buffer-1point5rem">{sectionFourFirstIndex[0]?.mainHeadingH1}</h1>
                                                        <h2 className="text-white font-bold bottom-buffer-1point5rem">{sectionFourFirstIndex[1]?.secondaryHeadingH2}</h2>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourFirstIndex[2]?.description}</p>
                                                    </div>
                                                    <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFourFirstIndex[3]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourFirstIndex[4]?.description}</p>
                                                        <h3 className="text-white font-bold mb-2 mt-3">{sectionFourFirstIndex[5]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourFirstIndex[6]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}

                                {sectionFourSecondIndex && sectionFourSecondIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide">
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFourSecondIndex[0]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourSecondIndex[1]?.description}</p>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFourSecondIndex[2]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourSecondIndex[3]?.description}</p>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFourSecondIndex[4]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourSecondIndex[5]?.description}</p>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFourSecondIndex[6]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFourSecondIndex[7]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}
                            </section>

                            <section id="smart-solutions-section_5" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center  ${section5?.bgImageName}`}  >
                                {sectionFiveFirstIndex && sectionFiveFirstIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide" >
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row pt-2 pb-2">
                                                    <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                                        <h1 className="text-white font-bold bottom-buffer-1point5rem">{sectionFiveFirstIndex[0]?.mainHeadingH1}</h1>
                                                        <h2 className="text-white font-bold bottom-buffer-1point5rem">{sectionFiveFirstIndex[1]?.headingLabelThree}</h2>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveFirstIndex[2]?.description}</p>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveFirstIndex[3]?.description}</p>
                                                    </div>
                                                    <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFiveFirstIndex[4]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveFirstIndex[5]?.description}</p>
                                                        <h3 className="text-white font-bold mb-2 mt-3">{sectionFiveFirstIndex[6]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveFirstIndex[7]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}

                                {sectionFiveSecondIndex && sectionFiveSecondIndex.length > 0 &&
                                    <section id="" className="slide slide bg-size-cover bg-no-repeat fp-slide">
                                        <div id="smart-solutions-container" className="container-lg">
                                            <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFiveSecondIndex[0]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveSecondIndex[1]?.description}</p>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFiveSecondIndex[2]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveSecondIndex[3]?.description}</p>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFiveSecondIndex[4]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveSecondIndex[5]?.description}</p>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                                                        <h3 className="text-white font-bold mb-2">{sectionFiveSecondIndex[6]?.headingLabelThree}</h3>
                                                        <p className="text-white big mb-2 mt-2">{sectionFiveSecondIndex[7]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>}
                            </section>

                            <CommonFooter />

                            <Footer />
                        </>
                    )
                }}
            />
        </>
    )
}

export default SmartSolutions
