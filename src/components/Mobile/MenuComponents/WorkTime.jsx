import { WorkMF, WorkSat } from "../../Svg";
const WorkTime = () => {
  return (
    <div className="work-time-container">
      <div className="work-time">
        <ul className="work-time-list">
          <li className="work-time-item">
            <div className="work-time-wrapper">
              <WorkMF className="workSvg" />
              <div className="work-time-info">
                <h2 className="work-time-day">Пн-Пт</h2>
                <p className="work-time-hours">8:00-17:00</p>
              </div>
            </div>
          </li>
          <li className="work-time-item">
            <div className="work-time-wrapper">
              <WorkSat className="workSvg" />
              <div className="work-time-info">
                <h2 className="work-time-day">Cуббота</h2>
                <p className="work-time-hours">9:00-15:00</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkTime;
