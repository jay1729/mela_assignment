import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
	main: {
		height: win.width,
        width: win.width,
        marginBottom: win.width*0.0888
	},
	lightBlue: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: win.width,
		height: win.width * 0.35,
		backgroundColor: '#e9fef7'
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
	title: {
		marginTop: win.width * 0.06666,
		marginLeft: win.width * 0.044
    },
    typesList: {
        width: win.width,
		marginTop: win.width * 0.2111,
		marginLeft: win.width * 0.1222,
		flex: 1,
		flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute'
    },
    type: {
        margin: 0,
        marginRight: win.width*0.2466,
        marginBottom: win.width*0.13888
    },
    typeImage: {
        width: win.width*0.2222,
        height: win.width*0.2222,
        margin: 0
    },
    imageContainer: {
        width: win.width*0.2444,
        height: win.width*0.2444,
        borderRadius: win.width*0.1222,
        borderWidth: 3,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderStyle: "dotted",
        borderColor: '#ADD8E6',
        margin: 0
    },
    typeTitle: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 18,
        color: '#040e35',
        marginTop: win.width*0.0222
    }
});

const types = [
    {
        title: 'Hoodie',
        image: require('../static/types/hoodie.png'),
    },
    {
        title: 'Woolen Hoodie',
        image: require('../static/types/woolen_hoodie.png'),
    },
    {
        title: 'Sweatshirt',
        image: require('../static/types/sweatshirt.png'),

    },
    {
        title: 'Round Neck',
        image: require('../static/types/round_neck.png')
    }
];

function Type(data) {
    return(
        <View style={styles.type} >
            <View style={styles.imageContainer} >
            <Image style={styles.typeImage} source={data.image} />
            </View>
            <Text style={styles.typeTitle} >{data.title}</Text>
        </View>
    );
}

class Types extends React.Component {
	render() {
		return (
			<View style={styles.main}>
				<View style={styles.lightBlue} />
				<View style={styles.title}>
					<Text style={styles.mainTitle}>SHOP BY TYPE</Text>
					<Text style={styles.subTitle}>Shop our most-loved brands!</Text>
				</View>
                <View style={styles.typesList}>{types.map((d) => Type(d))}</View>
			</View>
		);
	}
}

export default Types;
