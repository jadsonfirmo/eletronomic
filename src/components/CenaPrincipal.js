import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  BackHandler,
  Button
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';
import Acompanhamento from './Acompanhamento';

const logo = require('../imgs/logoEletronomic.png');
const menuAcompanhamento = require('../imgs/menu_acompanhamento.png');
const menuRelatorios = require('../imgs/menu_relatorios.png');
const menuDicas = require('../imgs/menu_dicas.png');
const menuMetas = require('../imgs/menu_metas.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar 
          backgroundColor='#000'
        />

        <BarraNavegacao />

        <View style={styles.logo}>
          <Image style={{ height: 60, width: 250 }} source={logo} />
        </View>

        <View style={styles.menu}>

          <View style={styles.menuGrupo}>

            <TouchableHighlight
              underlayColor={'#000'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'acompanhamento' });
              }}
            >
              <View>
                <View style={styles.boxImg}>
                  <Image style={styles.imgMenu} source={menuAcompanhamento} />
                </View>
                <View style={styles.legend}>
                  <Text style={styles.legendaTxt}>Acompanhamento</Text>                
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#000'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'relatorios' });
              }}
            >
              <View>
                <View style={styles.boxImg}>
                  <Image style={styles.imgMenu} source={menuRelatorios} />
                </View>
                <View style={styles.legend}>
                  <Text style={styles.legendaTxt}>Relatórios</Text>                
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#000'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'dicas' });
              }}
            >
              <View>
                <View style={styles.boxImg}>
                  <Image style={styles.imgMenu} source={menuDicas} />
                </View>
                <View style={styles.legend}>
                  <Text style={styles.legendaTxt}>Dicas</Text>                
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#000'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'metas' });
              }}
            >
              <View>
                <View style={styles.boxImg}>
                  <Image style={styles.imgMenu} source={menuMetas} />
                </View>
                <View style={styles.legend}>
                  <Text style={styles.legendaTxt}>Metas</Text>                
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.botao}>
          <Button 
            title="SAIR"
            color="#000"
            onPress={() => {
              BackHandler.exitApp(); //Sair do APP
            }}
          />
        </View>

        <View style={styles.rodape}>
          <Text>Copyrigths ® Jadson e Thibério DEVs</Text>
        </View>

      </View>
    );
  }
}

// componentWillMount() {
//   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
// }
// componentWillUnmount() {
//   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
// }
// handleBackButtonClick() {
//   BackHandler.exitApp();
//   return true;
// }

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImg: {
    alignItems: 'center',
    justifyContent: 'center',   
    borderRadius: 30,    
    backgroundColor: '#000',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,    
    height: 135,
    width: 125
  },
  legendaTxt: {
    color: '#000',
    fontSize: 10,
  },
  legend: {
    justifyContent: 'center',
    alignItems: 'center'   
  },
  botao: {
    backgroundColor: '#000',
    padding: 10,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
  },
  rodape: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10       
  }
});
