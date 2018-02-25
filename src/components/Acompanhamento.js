import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheAcompanhamento = require('../imgs/detalhe_acompanhamento.png');
const acompanhamento1 = require('../imgs/acompanhamento1.png');
const acompanhamento2 = require('../imgs/acompanhamento2.png');

export default class Acompanhamento extends Component {

//   [
//     {
//         "valor": 255010,
//         "userId": 1,
//         "id": 1,
//         "createdAt": "2018-02-15T12:23:53.000Z",
//         "updatedAt": "2018-02-15T12:23:53.000Z"
//     },
//     {
//         "valor": 455010,
//         "userId": 2,
//         "id": 2,
//         "createdAt": "2018-02-15T12:24:03.000Z",
//         "updatedAt": "2018-02-15T12:24:03.000Z"
//     },
//     {
//         "valor": 855010,
//         "userId": 3,
//         "id": 3,
//         "createdAt": "2018-02-15T12:24:13.000Z",
//         "updatedAt": "2018-02-15T12:24:13.000Z"
//     }
// ]

  render() {
    return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar 
          backgroundColor='#000'
        />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#FFD700' />

        <View style={styles.cabecalho}>
          <Image source={detalheAcompanhamento} />
          <Text style={styles.txtTitulo}>Acompanhamento</Text>
        </View>

        <View style={styles.detalheAcompanhamento}>
          <Image source={acompanhamento1} />
          <Text style={styles.txtDetalheAcompanhamento}>Última atualização: 15/02/2018 - 14:50</Text>
        </View>

        <View style={styles.detalheAcompanhamento}>
          <Image source={acompanhamento2} />
          <Text style={styles.txtDetalheAcompanhamento}>Leitura corrente: 250480 KW</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#000',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  txtTitulo: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 10,    
  },
  detalheAcompanhamento: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheAcompanhamento: {
    fontSize: 18,
    marginLeft: 20
  }
});
