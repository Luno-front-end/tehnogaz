import infoCard from "../../../infoCardPopUp.json";
const CardPopUp = ({ active, ind, openCloseCard }) => {
  //   const choiceInfoCard = () => {};
  //   console.log(infoCard[ind]);
  return (
    <div
      className={
        active ? "overflow-popup-card active-popup-card" : "overflow-popup-card"
      }
      onClick={openCloseCard}
    >
      <div className="wrapper-popup-card">
        <h2 className="head-popup-card">{infoCard[ind]?.header}</h2>
        <p className="text-popup-card">{infoCard[ind]?.text}</p>
        <p className="value-popup-card">
          {infoCard[ind]?.value}
          <span className="number-popup-card">{infoCard[ind]?.number}</span>
        </p>
      </div>
    </div>
  );
};

export default CardPopUp;
