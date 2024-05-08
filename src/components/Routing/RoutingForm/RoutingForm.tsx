import React, { useState } from 'react';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';

const RoutingForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonStyle, setButtonStyle] = useState('bg-[#C9C9C9] mx-auto p-[19px] w-[25rem] rounded-full text-center text-1xl text-white');

  const handleValidation = () => {
    let isValid = true;

    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields.');
      isValid = false;
      setButtonStyle('bg-black mx-auto p-[19px] w-[25rem] rounded-full text-center text-1xl text-white');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      isValid = false;
      setButtonStyle('bg-black mx-auto p-[19px] w-[25rem] rounded-full text-center text-1xl text-white');
    } else {
      setError('');
      setButtonStyle('bg-[#C9C9C9] mx-auto p-[19px] w-[25rem] rounded-full text-center text-1xl text-white');
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      navigate('/congratulation');
    }
  };

  return (
    <div className="text-center mt-9">
      <p className="font-covered text-4xl text-[#2DA950]">Registration Form</p>
      <h1 className="text-6xl leading-tight mt-9">Start your success <br /> Journey here!</h1>
      <div className="mt-9">
        <input type="text" placeholder="Enter Your Name" className="block mx-auto mb-3 p-[19px] w-[27rem] rounded-full bg-[#EFEFEF]" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Enter Your Email" className="block mx-auto mb-3 p-[19px] w-[27rem] rounded-full bg-[#EFEFEF]" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex items-center justify-center">
        {error && <span className="mr-2 text-red-500"><MdErrorOutline /></span>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="mt-2">
        <Button btnName="Submit" handleClick={handleSubmit} classStyle={buttonStyle} />
      </div>
    </div>
  );
};

export default RoutingForm;
