import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/logo.png';
import { FaCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const CongratulationScreen = () => {
    const navigate = useNavigate();
    const [redirectCountdown, setRedirectCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        const interval = setInterval(() => {
            setRedirectCountdown((prevCount) => prevCount - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [navigate]);

    return (
        <div>
            <div className='flex justify-between items-center mt-4 mr-[4rem] ml-[4rem] p-[9px]'>
                <div>
                    <img className='ml-[2rem]' src={Logo} alt='Logo Image' />
                </div>
            </div>

            <div className='text-center mt-40'>
                <FaCheck className='mx-auto bg-[#3fd86a] rounded-full text-7xl p-2' />
                <p className='font-covered text-2xl text-[#2DA950] mt-7'>Success Submitted</p>
                <h1 className='text-6xl mt-8'>Congratulations</h1>
                <p className='mt-10 text-[#727272] text-2xl'>
                    Your request has been successfully submitted to us. We <br /> will validate your information and reach out
                    to your <br /> shortly with updates
                </p>
            </div>
            <div className='mt-[15rem]'>
                <h1 className='text-center text-xl'>
                    Redirecting you to Homepage in {redirectCountdown} Seconds
                </h1>
            </div>
        </div>
    );
};

export default CongratulationScreen;
