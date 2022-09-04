import React from 'react';
import { quotes } from '../assets';

type Props = {
  content: string;
  name: string;
  title: string;
  img: string;
};

const FeedbackCard: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain " />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{props.content}</p>
      <div className="flex flex-row">
        <img src={props.img} alt={props.name} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-8 text-white">{props.name}</h4>
          <p className="font-poppins font-semibold text-[16px] leading-6 text-dimWhite">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;