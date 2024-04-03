import React from 'react';

import { InitTopBar } from './components/Headers/TopBar.mjs';
import { InitTabBar } from './components/Headers/TabBar.mjs';
import { InitBottomBar } from './components/Footers/BottomBar.mjs';

/**
 * @returns {React.JSX.Element}
 */
export function Main() {

  return (
    <>
      <InitTabBar />
      {/* <InitBottomBar /> */}
    </>
  );
}