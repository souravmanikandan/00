import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Desktop Application",
    icon: "img/svg/cpu.svg",
    img: "img/service/1.jpg",
    description: [
      "I specialize in crafting dynamic and visually stunning websites tailored to meet your unique needs. With expertise in frontend and backend development, I bring your ideas to life using the latest technologies and industry best practices.",

      "Services Offered:",
      

"Responsive Web Design: Create engaging and user-friendly websites optimized for all devices and screen sizes.",
"Custom Web Development: Develop bespoke web solutions tailored to your specific requirements, from simple landing pages to complex web applications.",
"E-commerce Development: Build robust and scalable e-commerce platforms that drive sales and enhance user experience.",
"Content Management Systems (CMS): Implement intuitive CMS solutions like WordPress or custom-built systems for easy content management.",
"Website Maintenance: Provide ongoing support and maintenance services to keep your website running smoothly and up-to-date.",
"Technologies:",
"Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js",
"Backend: Node.js, Express.js, MongoDB, MySQL",
"Other Tools: Git, GitHub, VS Code, Bootstrap, Sass",

"Let's collaborate to bring your vision to life and create a captivating online presence for your brand or business. Get in touch today to discuss your project requirements!",


    ],
  },
  {
    name: "Mobile Application",
    icon: "img/svg/phone.svg",
    img: "img/service/2.jpg",
    description: [
      " specialize in designing and developing innovative mobile applications that enhance user experience and drive engagement. With a focus on user-centric design and cutting-edge technologies, I bring your app ideas to life on both iOS and Android platforms.",
      "Services Offered:",
      "Native Mobile App Development: Create high-performance, native mobile applications tailored specifically for iOS and Android platforms, ensuring optimal performance and seamless user experience.",
      "Cross-Platform App Development: Build versatile cross-platform applications using frameworks like React Native or Flutter, allowing for simultaneous deployment on multiple platforms while reducing development time and costs.",
      "UI/UX Design: Design visually appealing and intuitive user interfaces that captivate users and enhance overall user experience, ensuring your app stands out in the crowded app marketplace.",
      "App Maintenance and Support: Provide ongoing maintenance and support services to ensure your mobile application remains up-to-date, secure, and compatible with the latest OS versions and devices.",
      "App Store Optimization (ASO): Optimize your mobile application's visibility and ranking on the Apple App Store and Google Play Store through strategic ASO techniques, driving organic downloads and user acquisition.",
      "Technologies:",
      "iOS Development: Swift, Xcode, UIKit, SwiftUI",
      "Android Development: Java, Kotlin, Android Studio",
      "Cross-Platform: React Native, Flutter",
      "UI/UX Design: Adobe XD, Sketch, Figma",
      "Let's collaborate to transform your mobile app ideas into reality and create impactful experiences for your users. Reach out today to discuss your project requirements and take the first step towards mobile app success!"
    ],
  },
  {
    name: "Website Development",
    icon: "img/svg/web.svg",
    img: "img/service/3.jpg",
    description: [
      "I specialize in crafting visually stunning and fully functional websites that captivate audiences and drive results. With expertise in both frontend and backend development, I create custom web solutions tailored to your unique needs and goals.",
      "Services Offered:",
      "Responsive Web Design: Develop websites that adapt seamlessly to various screen sizes and devices, ensuring an optimal viewing experience for all users.",
      "Custom Web Development: Build bespoke websites tailored to your specific requirements, from simple landing pages to complex web applications, using cutting-edge technologies and industry best practices.",
      "E-commerce Solutions: Create robust and scalable e-commerce platforms that enable seamless online transactions, drive sales, and enhance user experience.",
      "Content Management Systems (CMS): Implement user-friendly CMS solutions like WordPress or develop custom CMS platforms to empower you to easily manage and update website content.",
      "Website Maintenance and Support: Provide ongoing maintenance and support services to ensure your website remains secure, up-to-date, and performing at its best",
      "Technologies:",
      "Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js",
      "Backend: Node.js, Express.js, MongoDB, MySQL",
      "Other Tools: Git, GitHub, VS Code, Bootstrap, Sass",
      "Let's collaborate to bring your vision to life and create a captivating online presence for your brand or business. Contact me today to discuss your website development needs and take the first step towards digital success!"
    ],
  },
  {
    name: "Game Development",
    icon: "img/svg/star.svg",
    img: "img/service/4.jpg",
    description: [
      "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
