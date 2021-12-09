import Logo from "./Logo";
import Menu from "./Menu";
import Card from "./Card/Card";

const HiroMob = () => {
  return (
    <div>
      <header>
        <div className="wrapper-nav">
          <Logo />
          <Menu />
        </div>
        <Card />
      </header>
    </div>
  );
};

export default HiroMob;
