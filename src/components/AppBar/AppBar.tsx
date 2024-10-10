import Contacts from "../Contacts/Contacts";
import LanguageBar from "../LanguageBar/LanguageBar";
import NavBar from "../NavBar/NavBar";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div className={css.appbar}>
      <NavBar />
      <div className={css.rightMenu}>
        <Contacts />
        <LanguageBar />
      </div>
    </div>
  );
};

export default AppBar;
