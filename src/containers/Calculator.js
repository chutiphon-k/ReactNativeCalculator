import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import { 
	Header,
	Card,
	CardSection,
	Button,
	Input
} from '../components/common'

export default class Calculator extends Component {

	state = {
		x: 0,
		y: 0,
		result: 0
	}

	onChangeX(x){
		this.setState({ x: +x })
	}

	onChangeY(y){
		this.setState({ y: +y })
	}

	onButtonPlus(){
		this.setState({ result: this.state.x + this.state.y })
	}	

	onButtonMinus(){
		this.setState({ result: this.state.x - this.state.y })
	}

	onButtonClear(){
		this.setState({ x: 0, y: 0, result: 0})
	}

	render(){
		return (
			<View>
				<Header headerText='Calculator' />
				<Card>
					<CardSection>
						<Input
							label='X = '
							placeholder='value of x'
							value={this.state.x.toString()}
							onChangeText={this.onChangeX.bind(this)}
							autoFocus={true}
							keyboardType='numeric'
						/>
					</CardSection>
					<CardSection>
						<Input
							label='Y = '
							placeholder='value of y'
							value={this.state.y.toString()}
							onChangeText={this.onChangeY.bind(this)}
							keyboardType='numeric'
						/>
					</CardSection>
					<CardSection>
						<View style={styles.containerStyle}>
							<Text style={styles.resultStyle}>Result : {this.state.result}</Text>
						</View>
					</CardSection>
					<CardSection>
						<Button onPress={this.onButtonPlus.bind(this)}>+</Button>
						<Button onPress={this.onButtonMinus.bind(this)}>-</Button>
						<Button onPress={this.onButtonClear.bind(this)}>clear</Button>
					</CardSection>
				</Card>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 40
	},
	resultStyle: {
		fontSize: 18,
		fontWeight: '600'
	}
})