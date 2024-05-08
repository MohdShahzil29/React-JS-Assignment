import React from 'react';
import modelImg from '../../assets/model.png';
import sparkle from '../../assets/spark, sparkle, 26.png';
import BoostImage from '../../assets/Group 1171281573.png';
import loadIcon from '../../assets/Frame 1261155430.png';
import Button from '../Button/Button';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='flex justify-between relative top-[10rem]'>
      <div className='relative left-[13rem]'>
        <div>
          <img src={modelImg} alt="Banner Image" className='rounded-3xl overflow-hidden' />
        </div>
        <div className='textbackground w-[14rem] rounded-3xl relative bottom-[26rem] right-[8rem]'>
          <img src={sparkle} alt="sparkleImage" className='rotate-[-3deg] relative bottom-[1rem] right-[7px]' />
          <h1 className='text-5xl relative left-[2.3rem] font-switzer bottom-[2rem]'>40%</h1>
          <p className='relative bottom-[1.5rem] opacity-35 left-[19px]'>Achieved reduction in project execution time <br /> by optimising team <br /> availability</p>
        </div>
        <div className='flex textbackground w-[15rem] h-[5rem] text-center rounded-full relative bottom-[21rem] right-[4rem]'>
          <img src={BoostImage} className='h-[3.5rem] relative right-[-4px] top-[11px]' alt="Boost Image" />
          <div className='flex flex-col mt-2'>
            <p className='text-[1.7rem] relative right-[7px]'>10 days</p>
            <p className='opacity-35 text-[14px] relative left-[3px]'>Staff Deployment</p>
          </div>
        </div>
        <div className='greenBackground text-white h-[13rem] w-[16rem] rounded-3xl relative bottom-[27rem] left-[21rem]'>
          <div className='flex mt-4'>
            <p className='ml-10 text-[2.70rem]'>$0.5</p>
            <p className='ml-10 relative right-[29px] top-[28px] opacity-35'>MILLION</p>
          </div>
          <p className='ml-[2.70rem]'>Reduced client expenses by saving on hiring and employee costs.</p>
        </div>
      </div>
      <div className='flex flex-col relative right-[13rem]'>
        <h1 className='text-[2.3rem] leading-[2.65rem] mt-[3rem]'>
          Enhance fortune <br /> 50 company's insights <br /> teams research <br /> capabilities
        </h1>
        <div>
          <img className='mt-[2rem]' src={loadIcon} alt="Load Icon" />
        </div>
        <Button btnName='Explore more' handleClick={() => { }} classStyle='bg-black text-white rounded-full p-4 shadow-outline-white w-[10rem] mt-[12rem]' icon={FaArrowRight} />
      </div>
    </div>
  );
};

export default Banner;
