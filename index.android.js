import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Login from './src/components/Login';
import CenaPrincipal from './src/components/CenaPrincipal';
import Acompanhamento from './src/components/Acompanhamento';
import Relatorios from './src/components/Relatorios';
import Dicas from './src/components/Dicas';
import Metas from './src/components/Metas';

export default class eletronomic extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'principal' }}
				renderScene={(route, navigator) => {
					switch (route.id) {
						case 'login':
							return (<Login navigator={navigator} />);

						case 'principal':
							return (<CenaPrincipal navigator={navigator} />);

						case 'acompanhamento':
							return (<Acompanhamento navigator={navigator} />);

						case 'relatorios':
							return (<Relatorios navigator={navigator} />);

						case 'dicas': 
							return (<Dicas navigator={navigator} />);

						case 'metas':
							return (<Metas navigator={navigator} />);

						default:
							return false;
					}
				}}
      />
    );
  }
}

AppRegistry.registerComponent('eletronomic', () => eletronomic);
