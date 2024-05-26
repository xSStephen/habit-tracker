import React from "react";
import "../styles/header.css";
import {
  Cog6ToothIcon,
  ChartBarSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div>
      <div className="headerBox">
        <ul className="list">
          <div className="left">
            <li>
              <Cog6ToothIcon width={30} height={30} />
            </li>
            <li style={{ fontWeight: "bold" }}>
              Habit
              <span style={{ color: "blue" }}>Tracker</span>
            </li>
          </div>
          <div className="right">
            <li>
              <ChartBarSquareIcon width={30} height={30} />
            </li>
            <li>
              <PlusIcon width={30} height={30} />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
