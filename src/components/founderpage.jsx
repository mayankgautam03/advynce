import React from 'react';
import founderImage from '/public/founder.jpg';
import mentorImage from '/public/mentor.jpg';


const TeamSection = () => {
  return (
    <section className="bg-transparent py-12 px-6 md:px-20 flex flex-col md:flex-row justify-center gap-16">
      
      {/* Founder Card */}
      <div className="flex flex-col items-center max-w-sm bg-transaprent p-6 rounded-lg shadow-md">
        <img
          src={founderImage}
          alt="Founder"
          className="w-48 h-48 rounded-lg object-cover shadow-lg"
        />
        <h2 className="mt-6 text-2xl font-semibold text-black">Mayank Gautam</h2>
        <h2 className="mt-0 text font-semibold text-gray-500">Founder </h2>
        <p className="mt-3 text-black text-center">
         Mayank is the founder of AdVynce, with extensive experience across AI and software development sectors. As a skilled digital marketing expert, he has partnered with numerous businesses to drive exponential growth and deliver outstanding results. Mayank’s innovative approach and commitment to excellence have positioned him as a trusted leader and strategist in the digital marketing space.
        </p>
      </div>

      {/* Mentor Card */}
      <div className="flex flex-col items-center max-w-sm bg-transaprent p-6 rounded-lg shadow-md">
        <img
          src={mentorImage}
          alt="Mentor"
          className="w-48 h-48 rounded-lg object-cover shadow-lg"
        />
        <h2 className="mt-6 text-2xl font-semibold text-black">Amit Gautam</h2>
        <h2 className="mt-0 text font-semibold text-gray-500">Chief Marketing Mentor </h2>
        <p className="mt-3 text-black text-center">
         Amit Gautam is an IIM Lucknow graduate specializing in digital marketing and finance. With over 12 years of experience, he is currently the Vice President of Marketing at 99acres.com and serves as the Chief Marketing Mentor at AdVynce. Amit plays a key role in devising effective marketing strategies tailored for all types of businesses, helping them achieve rapid growth and profitability within just a few months.
        </p>
      </div>

    </section>
  );
};

function FounderPage() {
  return (
    <div>
      <TeamSection />
    </div>
  );
}

export default FounderPage;
