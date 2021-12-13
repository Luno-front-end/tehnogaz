import leng from "../../../language.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { ArrowDown } from "../../Svg";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const onDropdownActive = (e) => {
    e.preventDefault();
    setActiveDropdown(!activeDropdown);
  };
  const onActiveLeng = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <div
        className={activeDropdown ? "menu-item menu-item-active" : "menu-item"}
      >
        {leng.map(({ ru, en, ua }, i) => (
          <div key="leng">
            <button
              className={
                activeDropdown ? "menu-link menu-link-active" : "menu-link"
              }
              onClick={onDropdownActive}
            >
              {ru} <ArrowDown className="arrowDown" />
            </button>
            {activeDropdown && (
              <ul className="dropdown-list" onClick={onActiveLeng}>
                <li className="dropdown-item">
                  <NavLink to="/ua" href="#" className="dropdown-link">
                    {ua}
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/en" className="dropdown-link">
                    {en}
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
