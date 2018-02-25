import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
		if (this.props.voltar) {
			return (
				<View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
					<TouchableHighlight
						underlayColor={this.props.corDeFundo}
            activeOpacity={0.3}
						onPress={() => {
							this.props.navigator.pop(); // Remove da fila de navegação
						}}
					>
						<Image source={btnVoltar} />
					</TouchableHighlight>
					<Text style={styles.titulo}>Eletronomic App</Text>
				</View>
			);
		}

    return (
			<View style={styles.barraTitulo}>
				<Text style={styles.titulo2}>Eletronomic App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	barraTitulo: {
		backgroundColor: '#000',
		padding: 10,
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	titulo: {
		flex: 1,
		fontSize: 20,
		fontStyle: 'italic',
		fontFamily: 'Roboto',		
		textAlign: 'center',
		justifyContent: 'center',		
		color: '#000'
	},
	titulo2: {
		flex: 1,
		fontSize: 20,
		fontStyle: 'italic',
		fontFamily: 'Roboto',		
		textAlign: 'center',
		justifyContent: 'center',		
		color: '#FFF'
	}
});
