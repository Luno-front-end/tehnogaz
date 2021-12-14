import infoCard from "../../../infoCardPopUp.json";
import { Cloud } from "../../Svg";

const CardPopUp = ({ active, ind, openCloseCard }) => {
  const variantRenderCloud = () => {
    if (infoCard[ind]?.valueTwo) {
      return (
        <div className="value-popup-card ">
          <Cloud className="oneCloudPopup" />
          <span className="dubleTexOne">{infoCard[ind]?.value}</span>{" "}
          {infoCard[ind]?.valueTwo && (
            <span className="plus-duble-popup">+ </span>
          )}
          <span className="dubleTexTwo">
            {infoCard[ind]?.valueTwo}
            <span className="number-popup-card-two">
              {infoCard[ind]?.number}
            </span>
          </span>
          <Cloud className="twoCloudPopup" />
        </div>
      );
    }
    if (ind === "2" || ind === "3" || ind === "4") {
      console.log(ind);
      return (
        <p className="value-popup-card">
          <Cloud className="cloud-popup-new" />
          {infoCard[ind]?.value}
          <span className="number-popup-card">{infoCard[ind]?.number}</span>
        </p>
      );
    } else {
      return (
        <p className="value-popup-card">
          <Cloud className="cloud-popup" />
          {infoCard[ind]?.value}
          <span className="number-popup-card">{infoCard[ind]?.number}</span>
        </p>
      );
    }
  };
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
        <div className="dubleValue">
          {variantRenderCloud()}
          {/* {infoCard[ind]?.valueTwo ? (
            <div className="value-popup-card ">
              <Cloud className="oneCloudPopup" />
              <span className="dubleTexOne">{infoCard[ind]?.value}</span>{" "}
              {infoCard[ind]?.valueTwo && (
                <span className="plus-duble-popup">+ </span>
              )}
              <span className="dubleTexTwo">
                {infoCard[ind]?.valueTwo}
                <span className="number-popup-card-two">
                  {infoCard[ind]?.number}
                </span>
              </span>
              <Cloud className="twoCloudPopup" />
            </div>
          ) : (
            <p className="value-popup-card">
              <Cloud className="cloud-popup" />
              {infoCard[ind]?.value}
              <span className="number-popup-card">{infoCard[ind]?.number}</span>
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CardPopUp;
