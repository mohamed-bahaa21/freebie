import React from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import LogoSect from './sections/LogoSect/LogoSect.component';
import Clouds from './components/clouds/clouds.component';
import HeaderSect from './sections/HeaderSect/HeaderSect.component';
import FooterSect from './sections/FooterSect/FooterSect.component';

function App() {
  return (
    <div className="App">
      <LogoSect />

      <Clouds />

      <HeaderSect />

      <FooterSect />
    </div>
  );
}

export default App;
