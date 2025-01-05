import React from 'react'

import img1 from "../../assets/image.jpg"

// custom style
import './portfolio.css'
import PortfolioTitle from './PortfolioTitle'

const Portfolio = () => {
    return (
        <>
            <PortfolioTitle />
            <div className=" max-w-6xl mx-auto">
                <div className="ds-project-list">
                    <div className="ds-project-list-loop aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">
                        <div className="transition-all duration-300 transform hover:translate-y-4">
                            <a href="project.html">
                                <figure><img src={img1} /></figure>
                                <section className='p-[1.875rem]'>
                                    <h2 className="ds-proj-hedding text-2xl font-semibold">Crypto exchange</h2>
                                    <span className="ds-tools text-[.9rem]">Android mobile app</span>
                                </section>
                            </a>
                        </div>
                    </div>
                    <div className="ds-project-list-loop aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">
                        <div className="transition-all duration-300 transform hover:translate-y-4">
                            <a href="project.html">
                                <figure><img src={img1} /></figure>
                                <section className='p-[1.875rem]'>
                                    <h2 className="ds-proj-hedding text-2xl font-semibold">Crypto exchange</h2>
                                    <span className="ds-tools text-[.9rem]">Android mobile app</span>
                                </section>
                            </a>
                        </div>
                    </div>
                    <div className="ds-project-list-loop aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">
                        <div className="transition-all duration-300 transform hover:translate-y-4">
                            <a href="project.html">
                                <figure><img src={img1} /></figure>
                                <section className='p-[1.875rem]'>
                                    <h2 className="ds-proj-hedding text-2xl font-semibold">Crypto exchange</h2>
                                    <span className="ds-tools text-[.9rem]">Android mobile app</span>
                                </section>
                            </a>
                        </div>
                    </div>
                    <div className="ds-project-list-loop aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">
                        <div className="transition-all duration-300 transform hover:translate-y-4">
                            <a href="project.html">
                                <figure><img src={img1} /></figure>
                                <section className='p-[1.875rem]'>
                                    <h2 className="ds-proj-hedding text-2xl font-semibold">Crypto exchange</h2>
                                    <span className="ds-tools text-[.9rem]">Android mobile app</span>
                                </section>
                            </a>
                        </div>
                    </div>
                    <div className="ds-project-list-loop aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">
                        <div className="transition-all duration-300 transform hover:translate-y-4">
                            <a href="project.html">
                                <figure><img src={img1} /></figure>
                                <section className='p-[1.875rem]'>
                                    <h2 className="ds-proj-hedding text-2xl font-semibold">Crypto exchange</h2>
                                    <span className="ds-tools text-[.9rem]">Android mobile app</span>
                                </section>
                            </a>
                        </div>
                    </div>
                    <div className="ds-project-list-loop aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">
                        <div className="transition-all duration-300 transform hover:translate-y-4">
                            <a href="project.html">
                                <figure><img src={img1} /></figure>
                                <section className='p-[1.875rem]'>
                                    <h2 className="ds-proj-hedding text-2xl font-semibold">Crypto exchange</h2>
                                    <span className="ds-tools text-[.9rem]">Android mobile app</span>
                                </section>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio