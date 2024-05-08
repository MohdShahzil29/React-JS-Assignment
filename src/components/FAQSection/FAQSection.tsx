import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import FAQImage from '../../assets/Union.png';

const FAQSection = () => {
    const [isOpen, setIsOpen] = useState(new Array(4).fill(false));

    const toggleFAQ = (index: any) => {
        const updatedIsOpen = [...isOpen];
        updatedIsOpen[index] = !updatedIsOpen[index];
        setIsOpen(updatedIsOpen);
        console.log(updatedIsOpen);
    };

    const faqs = [
        {
            index: 1,
            question: 'Do you offer freelancers?',
            answer: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
        },
        {
            index: 2,
            question: 'What are your payment options?',
            answer: 'We accept various payment methods, including credit/debit cards, PayPal, bank transfers, and more. Please check our payment options page for detailed information.'
        },
        {
            index: 3,
            question: 'How can I contact customer support?',
            answer: 'You can contact our customer support team via phone, email, or live chat. Our support representatives are available 24/7 to assist you with any inquiries or issues.'
        },
        {
            index: 4,
            question: 'What is your refund policy?',
            answer: 'Our refund policy varies depending on the product or service. Please refer to our refund policy page for specific details regarding eligibility, processing times, and conditions.'
        }
    ];

    return (
        <div className='bg-[#E8EEE7] flex justify-between'>
            <div>
                <p className='font-covered mt-[4rem] ml-[186px] text-[1.5rem] opacity-35'>What's on your mind?</p>
                <h1 className='ml-[186px] text-[3rem]'>Ask Questions</h1>
                <div>
                    <img src={FAQImage} alt="FAQ Union Image" className='relative left-[10rem] opacity-60 top-[5rem]' />
                </div>
            </div>
            {/* MAIN FAQ CODE */}
            <div className='flex flex-col gap-3 w-[500px] relative top-[6rem] right-[7rem]'>
                {faqs.map((faq, index) => (
                    <div key={index} className='border-b-2'>
                        <div className='flex flex-row justify-between p-4'>
                            <h1 className='relative left-[-18px]'>{faq.question}</h1>
                            {isOpen[index] ? (
                                <FaMinusCircle className='cursor-pointer' onClick={() => toggleFAQ(index)} />
                            ) : (
                                <FaPlusCircle className='cursor-pointer' onClick={() => toggleFAQ(index)} />
                            )}
                        </div>
                        {isOpen[index] && (
                            <div className='p-4'>
                                <p className='text-[#617275] relative right-[1.3rem]'>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
