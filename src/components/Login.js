import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Button,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  Image
} from 'react-native';
import axios from 'axios';

const logo = require('../imgs/logoEletronomic.png');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', senha: '', users: [] };
  }

  componentWillMount() {
		//requisção HTTP
		axios.get('http://localhost:1337/cliente')
    .then(response => {
      console.log(response);
      this.setState({ users: response.data });
    })
    .catch(() => {
      console.log('Erro ao recuperar os dados');
      this.setState(
        { users: [{
          "nome": "Jadson Firmo",
          "email": "jadson.uefs@gmail.com",
          "cpf": "05680111551",
          "senha": "12345",
          "pontos": 0,
          "id": 1,
          "createdAt": "2018-02-14T04:32:56.000Z",
          "updatedAt": "2018-02-14T04:32:56.000Z"
        },
        {
          "nome": "Thibério Patrício",
          "email": "thiberio.fsa@gmail.com",
          "cpf": "11111111111",
          "senha": "12345",
          "pontos": 0,
          "id": 2,
          "createdAt": "2018-02-14T04:36:56.000Z",
          "updatedAt": "2018-02-14T04:36:56.000Z"
        },
        {
          "nome": "João Silva",
          "email": "joao@teste.com",
          "cpf": "22222222222",
          "senha": "12345",
          "pontos": 0,
          "id": 3,
          "createdAt": "2018-02-14T04:39:30.000Z",
          "updatedAt": "2018-02-14T04:39:30.000Z"
        },
        {
          "nome": "Teste",
          "email": "teste",
          "cpf": "33333333333",
          "senha": "123",
          "pontos": 0,
          "id": 4,
          "createdAt": "2018-02-14T04:39:30.000Z",
          "updatedAt": "2018-02-14T04:39:30.000Z"
        }]
      });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar backgroundColor='#000' />

        <View style={styles.logo}>
          <Image style={{ height: 60, width: 250 }} source={logo} />
        </View>

        <View style={styles.forms}>
          <View>
            <Text style={styles.labels}>E-mail:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Digite seu e-mail"
            />
          </View>

          <View style={{ marginTop: 10 }}>        
            <Text style={styles.labels}>Senha:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(senha) => this.setState({ senha })}
              value={this.state.senha}
              placeholder="Digite sua senha"
            />
          </View>
        </View>

        <View style={styles.botao}>
          <Button
            title="Login"
            color="#000"
            onPress={() => {
              let achou = false;
              if (this.state.email !== '' && this.state.senha !== '') {
                for (const [index, user] of this.state.users.entries()) {
                  if (this.state.email === user.email && this.state.senha === user.senha) {
                    achou = true;
                    Keyboard.dismiss();
                    this.setState({ email: '', senha: '' });
                    this.props.navigator.push({ id: 'principal' });
                    break;
                  } else if (index === this.state.users.length - 1 && achou === false) {
                    alert('Dados inválidos. Tente novamente.');
                  }
                }
              } else {
                alert('Informe login e senha corretos.');
              }
            }}
          />
        </View>
        
        <View style={styles.contatos}>
          <Text style={styles.labels}>Contatos:</Text>        
          <Text style={styles.emails}>jadson.uefs@gmail.com</Text>
          <Text style={styles.emails}>thiberio.fsa@gmail.com</Text>
        </View>

        <View style={styles.rodape}>
          <Text>Copyrigths ® Jadson e Thibério DEVs</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center'
  },
  forms: {
    margin: 20
  },
  botao: {
    backgroundColor: '#000',
    padding: 10,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
  },
  labels: {
    fontSize: 16,
  },
  contatos: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emails: {
    fontStyle: 'italic'
  },
  rodape: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10       
  }
});
