import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class ItensDicas extends Component {

  render() {
    return (
			<View style={styles.item}>
			{console.log('Itens', this.props.item)}
				<View style={styles.destalhesItem}>
					<Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
					<Text style={styles.txtDetalhes}>Descrição: {this.props.item.descricao}</Text>
					<Text style={styles.txtDetalhes}>Link: <href> {this.props.item.url} </href></Text>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'row'
	},
	destalhesItem: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		fontSize: 18,
		color: 'blue',
		marginBottom: 5
	},
	txtDetalhes: {
		fontSize: 16
	}

});
