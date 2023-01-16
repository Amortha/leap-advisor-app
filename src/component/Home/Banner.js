import React, { useEffect } from 'react';
import bannerWomen from '../../assets/advisor-banner-women.webp';
import bannerbg from '../../assets/banner-bg-img-demo-two.webp';
import banerphone from '../../assets/banner-phn-image-demo-two.webp';
import CustomButton from '../CustomButton';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div style={{ backgroundImage: `url(${bannerbg})` }} className="hero min-h-screen ">
      <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 w-full mx-4">
        
        <div data-aos="zoom-in-down" data-aos-offset="200"
          data-aos-delay="300" className='text-left'>
                  
          <h1 className="lg:text-xl">YOUR BUSINESS GROWTH & SALES</h1>
          <h1 className="lg:text-5xl font-bold">
            Find Best Solution <br /> For
            <span className='lg:text-5xl font-bold text-warning'> Financial Future</span>
          </h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          <CustomButton></CustomButton>
        </div>
      <div >
        <img src={banerphone} className="hidden rounded-sm w-32 h-96 mt-80 ml-[-12]" />
        <img data-aos="zoom-in-up" data-aos-delay="300" src={bannerWomen} className="rounded-lg w-full max-w-7xl" />
       </div>
      </div>
    </div>
  );
};

export default Banner;