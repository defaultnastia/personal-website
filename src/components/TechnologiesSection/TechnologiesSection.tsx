import data from "../../data/stack.json";
import css from "./TechnologiesSection.module.css";
import duckie from "../../images/mock.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classNames from "classnames";

const TechnologiesSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const itemFrontClassNames = classNames(css.cardFront, css.card);
  const itemBackClassNames = classNames(css.cardBack, css.card);

  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        arrows={false}
        containerClass={css.flipCards}
      >
        {data.map((item) => (
          <div>
            <div key={item} className={itemFrontClassNames}>
              <img src={duckie} alt="mocked icon of a duck" />
            </div>
            <div className={itemBackClassNames}>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TechnologiesSection;
