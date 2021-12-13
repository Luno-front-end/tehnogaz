import { Link } from "react-router-dom";
import { Clock, Information, Location, Phone } from "../../Svg";

const Menu = () => {
  return (
    <div className="container-nav">
      <ul className="nav-list-tab">
        <li className="nav-item-tab">
          <Link to="/" className="link-item-nav">
            <Clock className="icon-nav" />
            <span className="general-link-text">
              Рабочие часы <span className="sub-text-link">Узнать</span>
            </span>
          </Link>
        </li>
        <li className="nav-item-tab">
          <Link to="/" className="link-item-nav">
            <Information className="icon-nav" />
            <span className="general-link-text">
              Инфо о нас <span className="sub-text-link">Узнать</span>
            </span>
          </Link>
        </li>
        <li className="nav-item-tab">
          <Link to="/" className="link-item-nav">
            <Phone className="icon-nav" />
            <span className="general-link-text">
              Контакты <span className="sub-text-link">Узнать</span>
            </span>
          </Link>
        </li>
        <li className="nav-item-tab">
          <Link to="/" className="link-item-nav">
            <Location className="icon-nav" />
            <span className="general-link-text">
              Адрес <span className="sub-text-link">Узнать</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
