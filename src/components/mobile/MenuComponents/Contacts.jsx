import { Phone, Email } from "../../Svg";
const Contacts = () => {
  return (
    <div className="work-time-container">
      <div className="work-time">
        <div className="wrapper-contacts">
          <div>
            <div className="box-contacts-menu">
              <Phone className="phone-menu-card" />
              <ul className="contacts-list-menu">
                <li className="contacts-item-menu">
                  <a className="contacts-link-menu" href="tel:0978180966">
                    +38 (097) 818-09-66
                  </a>
                </li>
                <li className="contacts-item-menu">
                  <a className="contacts-link-menu" href="tel:0953614833">
                    +38 (095) 361-48-33
                  </a>
                </li>
              </ul>
              <p className="info-contacts-menu">Номер телефона</p>
            </div>
            <div className="box-contacts-menu">
              <Email className="email-menu-card" />
              <ul className="contacts-list-menu">
                <li className="contacts-item-menu">
                  <a
                    className="contacts-link-menu"
                    href="email:tehnogaztorg@ukr.net"
                  >
                    tehnogaztorg@ukr.net
                  </a>
                </li>
              </ul>
              <p className="info-contacts-menu">Почтовый адрес</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
