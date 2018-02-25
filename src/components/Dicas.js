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

const detalheDicas = require('../imgs/detalhe_dicas.png');

export default class Dicas extends Component {

constructor(props) {
  super(props);
  this.state = { dicas: [] };
}

componentWillMount() {
  //requisção HTTP
  axios.get('http://localhost:1337/dicas')
  .then(response => {
    console.log(response);
    this.setState({ dicas: response.data });
  })
  .catch(() => {
    console.log('Erro ao recuperar os dados');
    this.setState(
      { dicas: [{
          "titulo": "Mude seus hábitos!",
          "descricao": "Todos nós podemos ajudar a combater o desperdício. Economizando energia elétrica, ajudamos a preservar o meio ambiente, ampliamos o tempo de vida dos recursos não-renováveis e adiamos a construção de usinas e a implantação de novas linhas de transmissão.",
          "url": "https://goo.gl/eFCcU9",
          "id": 1,
          "createdAt": "2018-02-15T10:42:25.000Z",
          "updatedAt": "2018-02-15T10:42:25.000Z"
      },
      {
          "titulo": "Aparelhos econômicos!",
          "descricao": "Conheça os aparelhos que irão te ajudar a economizar energia.",
          "url": "https://goo.gl/fEBHpk",
          "id": 2,
          "createdAt": "2018-02-15T10:50:31.000Z",
          "updatedAt": "2018-02-15T10:50:31.000Z"
      },
      {
          "titulo": "Economize em casa!",
          "descricao": "Ter a própria casa ou apartamento é uma delícia, não é? Mas junto com os benefícios, vêm também as contas. Água, gás, internet, luz.... Se não tomarmos cuidado acabamos exagerando no consumo e gastando mais do que o previsto, principalmente com energia. Por isso, neste post daremos 5 dicas para economizar na conta de energia elétrica!",
          "url": "https://goo.gl/CsV1mN",
          "id": 3,
          "createdAt": "2018-02-15T10:45:12.000Z",
          "updatedAt": "2018-02-15T10:45:12.000Z"
      },
      {
        "titulo": "Mude seus hábitos!",
        "descricao": "Todos nós podemos ajudar a combater o desperdício. Economizando energia elétrica, ajudamos a preservar o meio ambiente, ampliamos o tempo de vida dos recursos não-renováveis e adiamos a construção de usinas e a implantação de novas linhas de transmissão.",
        "url": "https://goo.gl/eFCcU9",
        "id": 4,
        "createdAt": "2018-02-15T10:42:25.000Z",
        "updatedAt": "2018-02-15T10:42:25.000Z"
    },
    {
        "titulo": "Aparelhos econômicos!",
        "descricao": "Conheça os aparelhos que irão te ajudar a economizar energia.",
        "url": "https://goo.gl/fEBHpk",
        "id": 5,
        "createdAt": "2018-02-15T10:50:31.000Z",
        "updatedAt": "2018-02-15T10:50:31.000Z"
    },
    {
        "titulo": "Economize em casa!",
        "descricao": "Ter a própria casa ou apartamento é uma delícia, não é? Mas junto com os benefícios, vêm também as contas. Água, gás, internet, luz.... Se não tomarmos cuidado acabamos exagerando no consumo e gastando mais do que o previsto, principalmente com energia. Por isso, neste post daremos 5 dicas para economizar na conta de energia elétrica!",
        "url": "https://goo.gl/CsV1mN",
        "id": 6,
        "createdAt": "2018-02-15T10:45:12.000Z",
        "updatedAt": "2018-02-15T10:45:12.000Z"
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
          <Image source={detalheDicas} />
          <Text style={styles.txtTitulo}>Dicas</Text>
        </View>

        <View style={styles.detalheDicas}>
            <ScrollView style={{ backgroundColor: '#DDD' }}>
               {
                  this.state.dicas.map((item, index) => (
                     <View key={item.id} style={styles.item}>
                        <View style={styles.destalhesItem}>
                          <Text style={styles.txtDicas}>{item.titulo}</Text>
                          <Text style={styles.txtDetalhes}>{item.descricao}</Text>
                          <Text style={styles.txtDetalhes}>Link: {item.url}</Text>
                        </View>
                     </View>
                  ))
               }
            </ScrollView>
        </View>

        <View>
          <Text> Rodapé </Text>
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
  detalheDicas: {
    padding: 20,
    marginBottom: 20
  },
  txtDicas: {
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
	}
});
