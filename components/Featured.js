import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
	background_image: {
        width: '100%',
        height: win.width
    },
    title: {
        fontSize: 30,
        fontFamily: 'Cochin',
        paddingLeft: win.width*0.33,
        paddingTop: win.width*0.075
    },
    featured_image: {
        width: win.width* 0.538,
        height: win.width* 0.538,
        marginTop: win.width*0.302,
        marginLeft: win.width*0.044,
        position: "absolute"
    },
    discount: {
        paddingTop: win.width*0.783,
        paddingLeft: win.width*0.669,
        position: "absolute"
    },
    discount1: {
        color: '#ffffff',
        fontSize: 14,
    },
    discount2: {
        color: '#ffffff',
        fontSize: 24,
        flex: 1
    },
    discount3: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: win.width*0.03
    }
});

class Featured extends React.Component {
	render() {
		return (
			<View>
				<ImageBackground
					style={styles.background_image}
					source={require('../static/featured/featured_background.png')}
				>
                    <Text style={styles.title}>New{"\n"}Collection</Text>
                    <Image
                        style={styles.featured_image}
                        source={require('../static/featured/featured_image.png')}
                        />
                    <View style={styles.discount} >
                    <Text style={styles.discount1} >SAVE UPTO</Text>
                    <View style={{flexDirection:"row"}} >
                    <Text style={styles.discount2}>45%</Text>
                    <Text style={styles.discount3} >OFF</Text>
                    </View>
                    </View>
                </ImageBackground>
			</View>
		);
	}
}

export default Featured;
