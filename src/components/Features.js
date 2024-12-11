const features_list = [
  {
    title: "Dedication",
    icon: "img/svg/design.svg",
    text: "At the heart of every project lies a commitment to the success and satisfaction of my clients. I believe that understanding their needs, goals, and aspirations is paramount to delivering exceptional results. Here's how my dedication to client success manifests in my work:",
  },
  {
    title: "Smart Work",
    icon: "img/svg/development.svg",
    text: "I prioritize efficiency and effectiveness through strategic planning, innovative solutions, and optimized processes. By leveraging data-driven decision making and a commitment to continuous improvement, I deliver optimal results while maintaining a healthy work-life balance.",
  },
  {
    title: "Intelligence",
    icon: "img/svg/landing.svg",
    text: "I harness the power of intelligence in every project, utilizing strategic insights, critical thinking, and adaptability to navigate complex challenges. By staying informed, curious, and agile, I ensure that my work remains innovative, impactful, and ahead of the curve.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
