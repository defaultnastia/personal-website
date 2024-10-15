import classNames from "classnames";
import css from "./ContactMe.module.css";
import icons from "../../images/socialIcons.svg";

const ContactMe = () => {
  return (
    <div className={classNames(css.section, "container")}>
      <h2>Let's work together</h2>
      <ul>
        <li>
          <a href="tel:+34672509702">
            <svg>
              <use xlinkHref={`${icons}#phone`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:anastayaaa@gmail.com">
            <svg>
              <use xlinkHref={`${icons}#gmail`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anastasiia-drachuk/"
            target="_blank"
          >
            <svg>
              <use xlinkHref={`${icons}#linkedin`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://t.me/nastiabydefault" target="_blank">
            <svg>
              <use xlinkHref={`${icons}#telegram`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:anastayaaa@gmail.com">
            <svg>
              <use xlinkHref={`${icons}#whatsapp`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/KBzV7ht2" target="_blank">
            <svg>
              <use xlinkHref={`${icons}#discord`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
