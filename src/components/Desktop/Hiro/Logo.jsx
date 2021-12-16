import logo from "../../../img/LogoMob.png";
import { LogoSvg } from "../../Svg";
const Header = () => {
  return (
    <>
      <div className="logo-container">
        <a href="#">
          <LogoSvg className="logo" />
          {/* <img src={logo} alt=""  /> */}
        </a>
      </div>
    </>
  );
};

export default Header;
