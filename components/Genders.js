import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
	title: {
		marginTop: win.width * 0.088,
		marginLeft: win.width * 0.044
	},
	mainTitle: {
		fontSize: 16,
		fontFamily: 'ProductSans-Black',
		fontWeight: 'bold'
	},
	subTitle: {
		fontSize: 12,
		color: '#8f9bb3'
	},
	genderImage: {
		width: win.width * 0.45,
		height: win.width * 0.6444,

		marginRight: 0.03333
	},
	genders: {
		marginTop: win.width * 0.04444,
		flex: 1,
		flexDirection: 'row',
        flexWrap: 'wrap',
	},
	gender: {
        marginLeft: win.width * 0.03333,
        marginBottom: win.width*0.0888
	},
	genderTitleContainer: {
		bottom: 0,
		left: 0,
		position: 'absolute',
		width: win.width * 0.45,
		height: win.width * 0.13333,
		borderRadius: 10
	},
	genderTitle: {
		bottom: 0,
		left: 0,
		position: 'absolute',
		width: win.width * 0.45,
		height: win.width * 0.13333,
		backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        justifyContent: 'center'
	},
	genderTitleShadow: {
		top: 0,
		left: 0,
		position: 'absolute',
		width: win.width * 0.45,
		height: win.width * 0.14333,
		backgroundColor: '#8f9bb3',
		borderRadius: 10
	},
	genderTitleText: {
        textAlign: 'center',
        alignItems: "center",
        alignContent: "center",
        fontSize: 16,
        lineHeight: 20,
        color: '#040e35'
	}
});

const genders = [
	{
		name: 'Men',
		image: require('../static/genders/men.png')
	},
	{
		name: 'Women',
		image: require('../static/genders/women.png')
	}
];

function Gender(data) {
	return (
		<View style={styles.gender}>
			<ImageBackground style={styles.genderImage} source={data.image}>
				<View style={styles.genderTitle}>
					<View style={styles.genderTitleShadow} />
					<View style={styles.genderTitle}>
						<Text style={styles.genderTitleText}>{data.name}</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

class Genders extends React.Component {
	render() {
		return (
			<View>
				<View style={styles.title}>
					<Text style={styles.mainTitle}>FOR ALL GENDERS</Text>
					<Text style={styles.subTitle}>Shop our most-loved brands!</Text>
				</View>
				<View style={styles.genders}>{genders.map((d) => Gender(d))}</View>
			</View>
		);
	}
}

export default Genders;
