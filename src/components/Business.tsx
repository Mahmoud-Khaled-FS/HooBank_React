import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

type FeatureCardProps = {
  icon: string;
  title: string;
  content: string;
  index: number;
};

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-xl ${props.index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={props.icon} alt={props.title} className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{props.title}</h4>
        <p className="font-poppins  text-dimWhite leading-[24px] mb-1">{props.content}</p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          We'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button className="mt-10 rounded-md">Get Started</Button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((card, inedx) => (
          <FeatureCard key={card.id} {...card} index={inedx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
