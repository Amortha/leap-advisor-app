import React, { useEffect } from 'react';
import guy2 from '../../assets/demo-two-section-three-main-img.webp';
import img2 from '../../assets/demo-two-section-three-side-img.webp';
import CustomButton from '../CustomButton';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Business = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid lg:grid-cols-2 gap-2">
        <div data-aos="fade-left"  data-aos-delay="300">
          <img src={guy2} className=" rounded-lg" />
        </div>
        <div className='text-left'>
        
          <h1 className="text-xl text-warning font-bold mb-4">GROWING ONLINE</h1>
          <h1 data-aos="fade-right"  data-aos-delay="300"  className="lg:text-5xl text-black font-bold">
            Steps To Build A<br />  <span className='underline decoration-warning'>Successful</span> Business & Digital Product
          </h1>
          <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          <CustomButton></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Business;