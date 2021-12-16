// import logo from "../../img/LogoMob.png";
import { LogoSvg } from "../Svg";
const Logo = () => {
  return (
    <div className="logo-container">
      <a href="#">
        <LogoSvg className="logo" />
        {/* <img src={Logo} alt=""  /> */}
      </a>
    </div>
  );
};

export default Logo;
