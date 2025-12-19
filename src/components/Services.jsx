import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  FileText, 
  Instagram, 
  BarChart, 
  Globe, 
  Target,
  Bot,
  Smartphone,
  Search,
  Layout,
  Monitor,
  Download
} from 'lucide-react';

// Service card component with animation
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <Icon className="text-blue-700 mr-4" size={40} />
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Drip Component from Wet Paint Button
const Drip = ({ left, height, delay }) => {
  return (
    <motion.div
      className="absolute top-[99%] origin-top"
      style={{ left }}
      initial={{ scaleY: 0.75 }}
      animate={{ scaleY: [0.75, 1, 0.75] }}
      transition={{
        duration: 2,
        times: [0, 0.25, 1],
        delay,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <div
        style={{ height }}
        className="w-2 rounded-b-full bg-[var(--primary)] transition-colors group-hover:bg-[var(--primary)]"
      />
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-full top-10 p-2"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-[var(--primary)] transition-colors group-hover:fill-[var(--primary)]"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-full top-0 rotate-90"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-[var(--primary)] transition-colors group-hover:fill-[var(--primary)]"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <motion.div
        initial={{ y: -8, opacity: 1 }}
        animate={{ y: [-8, 50], opacity: [1, 0] }}
        transition={{
          duration: 2,
          times: [0, 1],
          delay,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute top-full h-2 w-2 rounded-full bg-[var(--primary)] transition-colors group-hover:bg-[var(--primary)]"
      />
    </motion.div>
  );
};

// Download Button Component with Wet Paint Effect
const DownloadButton = ({ text, file }) => {

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = file;
  link.download = file;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-[var(--primary)] hover:bg-[var(--primary)] text-[var(--accent)] font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center mx-auto mt-12 transition-colors duration-300"
      onClick={handleDownload}
    >
      <Download className="mr-2" size={20} />
      {text}

      
      {/* Wet Paint Drips */}
      <Drip left="10%" height={24} delay={0.5} />
      <Drip left="30%" height={20} delay={3} />
      <Drip left="57%" height={10} delay={4.25} />
      <Drip left="85%" height={16} delay={1.5} />
    </motion.button>
  );
};





// Main Services Component
const Services = () => {
  const services = [
    {
  icon: Bot,
  title: "AI Website Development & Chatbot Integration",
  description:<ul class="list-disc pl-5 space-y-1">
  <li>Intelligent AI websites that deliver fast, personalized experiences.</li>
  <li>24/7 instant chatbot support to boost customer satisfaction and sales.</li>
  <li>Fully custom-branded solutions that integrate seamlessly across platforms.</li>
  <li>AI that continuously learns and improves every day.</li>
  <li>Save up to 30% on support costs and increase sales conversions by 20%.</li>
  <li>Free your team to focus on core business while AI handles routine queries.</li>
  <li>Experience smart AI solutions working round the clock for your business.</li>
</ul>


}
    ,
    {
  icon: BarChart,
  title: "Digital Marketing & Branding",
  description: (
    <ul style={{ listStyleType: "disc", listStylePosition: "outside", paddingLeft: "20px", margin: 0 }}>
      <li>Ignite your brand and maximize profits with expert marketing and branding.</li>
      <li>Create strategic growth plans that drive long-term success.</li>
      <li>Build magnetic brand identities that attract and retain customers.</li>
      <li>Run targeted ad campaigns that convert effectively.</li>
      <li>Amplify your social media presence with engaging strategies.</li>
      <li>Craft compelling content that resonates with your audience.</li>
      <li>Leverage data-driven insights to deliver measurable results.</li>
      <li>Partner with us to accelerate growth, spend smart, and build trust.</li>
      <li>Free your time while we handle marketing end-to-end.</li>
    </ul>
  )
}
    ,
    {
      icon: Globe,
      title: "Web Development (Traditional + AI-enhanced)",
      description: (
  <ul style={{ listStyleType: "disc", listStylePosition: "outside", paddingLeft: "20px", margin: 0, lineHeight: "1.8" }}>
    <li>Build a powerful digital presence with traditional and AI-enhanced web development.</li>
    <li>Deliver reliable, scalable websites tailored to your business needs.</li>
    <li>Integrate smart AI features for personalized user experiences.</li>
    <li>Enjoy responsive, SEO-optimized, and secure websites.</li>
    <li>Ensure seamless integration with your existing tools.</li>
    <li>Launch faster with streamlined development processes.</li>
    <li>Grow smarter using advanced analytics and automation.</li>
    <li>Receive ongoing support for a future-ready website.</li>
    <li>Drive real business results with cutting-edge technology.</li>
  </ul>
)


    },
    // {
    //   icon: Palette,
    //   title: "Branding",
    //   description: "Craft a unique and memorable brand identity that resonates with your target audience and stands out in the market."
    // },
    // {
    //   icon: ,
    //   title: "Web Development",
    //   description: "Build responsive, modern websites that showcase your brand and provide an exceptional user experience using latest professional technologies."
    // },
    // {
    //   icon: Instagram,
    //   title: "Social Media Presence Setup",
    //   description: "Create and optimize your social media profiles to maximize visibility and engagement."
    // },
    // {
    //   icon: Search,
    //   title: "SEO Optimization",
    //   description: "Implement strategic marketing campaigns that increase brand awareness and drive business growth."
    // },
    // {
    //   icon: Monitor,
    //   title: "Graphic Design",
    //   description: "We create professional graphic designs including logos, branding, and marketing materials that visually represent your business and engage your audience effectively."
    // },
    // {
    //   icon: Target,
    //   title: "Digital Strategy",
    //   description: "Create a comprehensive digital approach that aligns with your business goals and targets the right audience."
    // }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        {/* Download PitchDeck Buttons */}
<div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
  <DownloadButton 
    text="Download AI Solutions Overview"
    file="/AdVynceAI.pdf"
  />

  <DownloadButton 
    text="Download Digital Marketing Overview"
    file="/AdVynceDigitalMarketing.pdf"
  />
</div>


      </div>
    </div>
  );
};

export default Services;