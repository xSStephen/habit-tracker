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
            <li className="list-1">
              <Cog6ToothIcon width={30} height={30} />
            </li>
            <li className="list-2" style={{ fontWeight: "bold" }}>
              Habit
              <span className="tracker">Tracker</span>
            </li>
          </div>
          <div className="right">
            <li className="list-3">
              <ChartBarSquareIcon width={30} height={30} />
            </li>
            <li className="list-4">
              <PlusIcon width={30} height={30} />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
