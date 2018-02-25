import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import axios from 'axios';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheMetas = require('../imgs/detalhe_metas.png');

export default class Metas extends Component {

  componentWillMount() {
    //requisção HTTP
    axios.get('http://localhost:1337/metas')
    .then(response => {
      console.log(response);
      this.setState({ metas: response.data });
    })
    .catch(() => {
      console.log('Erro ao recuperar os dados');
      this.setState(
        { metas: [{
          "titulo": "META 01",
          "descricao": "Economize 200 Kw/H este mês.",
          "pontos": 300,
          "status": "Pendente",
          "id": 1,
          "createdAt": "2018-02-15T12:26:39.000Z",
          "updatedAt": "2018-02-15T12:26:39.000Z"
      },
      {
          "titulo": "META 02",
          "descricao": "Economize 400 Kw/H este mês.",
          "pontos": 600,
          "status": "Pendente",
          "id": 2,
          "createdAt": "2018-02-15T12:26:55.000Z",
          "updatedAt": "2018-02-15T12:26:55.000Z"
      },
      {
          "titulo": "META 03",
          "descricao": "Economize 500 Kw/H este mês.",
          "pontos": 900,
          "status": "Pendente",
          "id": 3,
          "createdAt": "2018-02-15T12:27:10.000Z",
          "updatedAt": "2018-02-15T12:27:10.000Z"
      },
      {
          "titulo": "META 04",
          "descricao": "Economize 800 Kw/H este mês.",
          "pontos": 1200,
          "status": "Pendente",
          "id": 4,
          "createdAt": "2018-02-15T12:28:26.000Z",
          "updatedAt": "2018-02-15T12:28:26.000Z"
      },
      {
          "titulo": "META 05",
          "descricao": "Economize 1000 Kw/H este mês.",
          "pontos": 1500,
          "status": "Pendente",
          "id": 5,
          "createdAt": "2018-02-15T12:28:36.000Z",
          "updatedAt": "2018-02-15T12:28:36.000Z"
      }]
      });
    });
  }

render() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar 
        backgroundColor='#000'
      />

      <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#FFD700' />

      <View style={styles.cabecalho}>
        <Image source={detalheMetas} />
        <Text style={styles.txtTitulo}>Metas</Text>
      </View>

      <View style={styles.detalheMetas}>
          <ScrollView style={{ backgroundColor: '#DDD' }}>
             {
                // this.state.metas.map((item, index) => (
                //    <View key={item.id} style={styles.item}>
                //       <View style={styles.destalhesItem}>
                //         <Text style={styles.txtMetas}>{item.titulo}</Text>
                //         <Text style={styles.txtDetalhes}>{item.descricao}</Text>
                //         <Text style={styles.txtDetalhes}>Pontos: {item.pontos}</Text>
                //       </View>
                //    </View>
                // ))
              <View>
                <Text style={styles.txtDetalheAcompanhamento}>Meta 01</Text>
                <Text style={styles.txtDetalheAcompanhamento}>Descrição: Atingir economia de 200 KW/H no mês atual.</Text>
                <Text style={styles.txtDetalheAcompanhamento}>Status: Pendente</Text>
                <Text style={styles.txtDetalheAcompanhamento}>Pontos: 300</Text>                
              </View>
             }
          </ScrollView>
      </View>

      <View>
        <Text> </Text>
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
detalheMetas: {
  padding: 20,
  marginBottom: 20
},
txtMetas: {
  fontSize: 18,
  fontWeight: 'bold',
},
item: {
  backgroundColor: '#FFF',
  borderWidth: 0.5,
  borderColor: '#999',
  margin: 10,
  padding: 10,
  flexDirection: 'row'
},
destalhesItem: {
  margin: 5,
},
DicaTitulo: {
  fontSize: 18,
  color: 'blue',
  marginBottom: 5
},
txtDetalhes: {
  fontSize: 16
},
txtDetalheAcompanhamento: {
  fontSize: 18,
  marginLeft: 20
}
});
