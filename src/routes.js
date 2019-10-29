import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Menu from './menu';
import {Icon} from 'native-base';
import Signup from './signup';
import Login from './login';
import SignupInd from './signup_indv';
import Forgot from './forgot';
import Resetpsw from './resetPsw';
import Changepsw from './changePsw';
import Settingspsw from './Settings&Privacy';
import Dash from './dash';
import Tabone from './tabOne';

// import   Log from './log';

const MenuIcon = () => {
  return <Icon name="menu" size={30} />;
};
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="up" component={Signup} hideNavBar={true} />

      <Scene key="login" component={Login} hideNavBar={true} />

      <Scene key="frgt" component={Forgot} hideNavBar={false} />
      <Scene key="rst" component={Resetpsw} hideNavBar={false} />
      <Scene key="chng" component={Changepsw} hideNavBar={false} />
      <Scene key="Settings" component={Settingspsw} hideNavBar={false} />

      <Scene key="indv" component={SignupInd} hideNavBar={true} />

      <Scene
        key="drawer"
        drawer
        contentComponent={Menu}
        drawerIcon={MenuIcon}
        drawerWidt={250}
        drawerPosition="left"
        hideNavBar>
        <Scene
          key="map"
          component={Dash}
          title="Zemy"
          initial={true}
          hideNavBar={false}
        />
      </Scene>
    </Scene>
  </Router>
);

export default Routes;
