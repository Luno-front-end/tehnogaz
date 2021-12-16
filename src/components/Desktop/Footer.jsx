import logo from "../../img/logoFooter.png";
import { LogoFooter } from "../Svg";

const Footer = () => {
  return (
    <div className="wrapper-info-footer">
      <div>
        <h2 className="street-head">Адрес</h2>
        <p className="street-text">г. Киев, ул. Бориспольская 15 </p>
        <p className="copyright">© 2022 ТЕХНОГАЗТОРГ</p>
      </div>
      <div className="wrapper-contacts-footer">
        <h3 className="head-contacts-footer">Контакты</h3>
        <ul className="contacts-footer-list">
          <li className="contacts-footer-item">
            <a className="link-contact-footer" href="tel:0978180966">
              +38-097-818-09-66
            </a>
          </li>
          <li className="contacts-footer-item">
            <a className="link-contact-footer" href="tel:0953614833">
              +38-095-361-48-33
            </a>
          </li>
          <li className="contacts-footer-item">
            <a
              className="link-contact-footer"
              href="mailto:tehnogaztorg@ukr.net"
            >
              tehnogaztorg@ukr.net
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapper-logo-footer">
        <LogoFooter className="logo-footer" />
        {/* <img src={logo} alt="tehnogaz" className="logo-footer" /> */}
      </div>
      <ul className="work-footer-list">
        <li className="work-footer-item">
          <p className="work-text-day">Пн-Пт </p>
          <p className="work-text-hour">8:00-17:00</p>
        </li>
        <li className="work-footer-item">
          <p className="work-text-day">Cуббота</p>
          <p className="work-text-hour">9:00-15:00</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
