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

const detalheRelatorios = require('../imgs/detalhe_relatorios.png');

export default class Relatorios extends Component {
  render() {
    return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar 
          //hidden
          backgroundColor='#000'
        />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#FFD700' />

        <View style={styles.cabecalho}>
          <Image source={detalheRelatorios} />
          <Text style={styles.txtTitulo}>Relatórios</Text>
        </View>

        <View style={styles.detalheRelatorios}>
          <Text style={styles.txtRelatorios}>Mês atual: Fevereiro</Text>
          <Text style={styles.txtRelatorios}>Ano: 2018</Text>
          <Text style={styles.txtRelatorios}>Você consumiu 190 KW/H até agora.</Text>
          <Text style={styles.txtRelatorios}>Você gastou até agora: R$ 42,00.</Text>
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
  detalheRelatorios: {
    marginTop: 20,
    padding: 20
  },
  txtRelatorios: {
    fontSize: 18
  }
});
