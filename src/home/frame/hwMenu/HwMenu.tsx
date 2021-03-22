import React from 'react';
import './HwMenu.scss';
import {HashRouter, NavLink} from 'react-router-dom';

const HwMenu: React.FC = () => {
  return (
      <HashRouter>
        <div className="hwMenu">
          <div className="content">
            <NavLink exact to="/">Welcome</NavLink>
            <NavLink to="/exProps">Props</NavLink>
            <NavLink to="/exRedux">Redux</NavLink>
          </div>
        </div>
      </HashRouter>
  );
};

export default HwMenu;