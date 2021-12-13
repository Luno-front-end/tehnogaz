import Logo from "./Logo";
import DropDown from "./DropDown";
import Menu from "./Menu";

const Hiro = () => {
  return (
    <>
      <div className="headerDesk-container">
        <Logo />
        <DropDown />
      </div>
      <div className="hiro-text-container">
        <h1 className="hiro-text-header">Природные газы</h1>
        <h2 className="hiro-text-subHeader">Техногазторг</h2>
      </div>

      <Menu />
    </>
  );
};
export default Hiro;
