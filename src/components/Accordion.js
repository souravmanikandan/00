import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "Our work strategy is built on a foundation of meticulous planning, agile execution, and continuous improvement to deliver exceptional results efficiently.",
  },
  {
    title: "The Process of Our Work",
    details:
      "Our work process revolves around meticulous planning, agile execution, and continuous refinement, ensuring efficient delivery of exceptional results.",
  },
  {
    title: "Core Value of Development",
    details:
      "The core value of development lies in fostering innovation, embracing challenges, and continually striving for excellence in crafting solutions that make a meaningful impact.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "Our unwavering desire to work hard fuels our commitment to achieving excellence, driving us to surpass expectations and reach new heights in every endeavor.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
