import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <address>
      <ul className={css.contactsList}>
        <li>
          <a href="mailto:anastayaaa@gmail.com">anastayaaa@gmail.com</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anastasiia-drachuk/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/defaultnastia" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Contacts;
