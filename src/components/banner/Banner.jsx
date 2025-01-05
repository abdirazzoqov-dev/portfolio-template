import React from 'react'

// custom style
import './banner.css'

// react icons
import { HiMiniArrowLongRight } from "react-icons/hi2";

import TypeWriter from '../typewriter/TypeWriter';

const Banner = () => {
    return (
        <section class="ds-banner-section ds-content-width">
            
           <div className='max-h-full'>
           {/* <TypeWriter /> */}
           </div>

            {/* <h1 class="ds-heading"><span>I design digital<br /> products, web application and branding.</span></h1> */}
            <p>Bring a business mind to design, and transform your career and company, with this free book by Apple and Electronic Arts design veteran Ryan Rumsey. Inside, he shares the essential vocabulary frameworks that you can put right to work.</p>
            <div className='flex items-center space-x-6'>
                <a href="about.html" class="ds-view-button text-transform-uppercase ds-button-arrow transition">About me </a><HiMiniArrowLongRight className='arrow-icon text-[#A6F3E7] font-bold text-5xl' />
            </div>
        </section>
    )
}

export default Banner