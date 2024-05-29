import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Menu = () => {
  return (
    <div>
      <div className="settings">
        <XMarkIcon width={30} height={30} />
        <p>Settings</p>
      </div>
      <div className="app">
        <h3>APP</h3>
        <ul>
          <li>General</li>
          <li>Theme</li>
          <li>Reorder habits</li>
        </ul>
      </div>
      <div className="general">
        <h3>General</h3>
        <ul>
          <li>Website</li>
          <li>Terms of use</li>
          <li>Rate the app</li>
          <li>Credits</li>
          <li>Send feedback</li>
          <li>Contribute to the project</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
