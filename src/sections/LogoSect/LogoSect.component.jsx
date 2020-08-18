import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './LogoSect.styles.scss';

const LogoSect = () => (
  <div>
    <div className="logo-container">
      <Logo />
    </div>
  </div>
);

export default LogoSect;
