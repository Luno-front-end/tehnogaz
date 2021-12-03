import logo from "../../img/LogoMob.png";
const Logo = () => {
  return (
    <div className="logo-container">
      <a href="#">
        <img src={logo} alt="" className="logo" />
      </a>
    </div>
  );
};

export default Logo;
