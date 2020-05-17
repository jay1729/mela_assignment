import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: win.width*0.8,
        width: win.width
    },
    darkBlue: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: win.width,
		height: win.width * 0.3444,
		backgroundColor: '#040e35'
    },
    title: {
		marginTop: win.width * 0.0666,
		marginLeft: win.width * 0.044
	},
	mainTitle: {
		fontSize: 16,
		fontFamily: 'ProductSans-Black',
        fontWeight: 'bold',
        color: '#ffffff'
	},
	subTitle: {
		fontSize: 12,
		color: '#ffffff'
    },
    offers: {
        width: win.width,
        marginTop: win.width * 0.2111,
		marginLeft: win.width * 0.0333,
        flex: 1,
		flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute'
    },
    offerFirst: {
        color: '#ffffff',
        fontSize: 14,
        lineHeight: 18
    },
    offerSecond: {
        color: '#ffffff',
        fontSize: 22,
        lineHeight: 32
    },
    offer: {
        backgroundColor: '#7ae0be',
        width: win.width*0.2888,
        height: win.width*0.2666,
        borderRadius: 15,
        marginRight: win.width*0.0333,
        justifyContent: "center",
        alignItems: "center"
    },
    offerShadow: {
        position: "absolute",
        top: 0,
        left: 0,
        width: win.width*0.2888,
        height: win.width*0.2766,
        backgroundColor: '#040e35',
        borderRadius: 15
    },
    offerNonShadow: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: '#7ae0be',
        width: win.width*0.2888,
        height: win.width*0.2666,
        borderRadius: 15
    }
});

const offers = [
    {
        first: 'Skirts Under',
        second: '299'
    },
    {
        first: 'Skirts Under',
        second: '1,499'
    },
    {
        first: 'Skirts At',
        second: '50% off'
    }
];

function Offer(data) {
    return(
        <View style={styles.offer} >
            <View style={styles.offerShadow} />
            <View style={styles.offerNonShadow} />
            <Text style={styles.offerFirst} >{data.first}</Text>
            <Text style={styles.offerSecond}>{data.second} </Text>
            
        </View>
    );
}

class Offers extends React.Component {
    render(){
        return(
            <View style={styles.main}>
                <View style={styles.darkBlue} />
                <View style={styles.title}>
					<Text style={styles.mainTitle}>FOR ALL GENDERS</Text>
					<Text style={styles.subTitle}>Shop our most-loved brands!</Text>
				</View>
        <View style={styles.offers} >{offers.map((o) => Offer(o))}</View>
            </View>
        );
    }
}

export default Offers;