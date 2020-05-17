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
	brandsList: {
		marginTop: win.width * 0.088,
		marginLeft: win.width * 0.044,
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	brandLogoContainer: {
		width: win.width * 0.288,
		height: win.width * 0.22,
        marginRight: win.width * 0.022,
        backgroundColor: '#ffffff',
        borderRadius: 10,
	},
	brandLogo: {
		width: win.width * 0.2055,
		height: win.width * 0.1527
    },
    brand: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: win.width*0.05,
        
    },
    brandShadow: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: win.width * 0.288,
        height: win.width * 0.23,
        backgroundColor: '#8f9bb3',
        marginRight: win.width * 0.022,
        borderRadius: 10
    },
    brandTitle: {
        fontSize: 14,
        color: '#040e35',
        textAlign: "center",
        lineHeight: 18,
        marginTop: win.width*0.032222
    },
    firstCopy: {
        width: win.width*0.1222,
        height: win.width*0.03888,
        backgroundColor: '#7ae0be',
        marginTop: win.width*0.01111,
        borderRadius: 5
    },
    firstCopyText: {
        fontSize: 8,
        textAlign: "center",
        color: '#ffffff',
        marginTop: win.width*0.002777
    }
});

const brands = [
	{
		title: 'Tommy Hilfiger',
		image: require('../static/brands/brand_logos/tommy_hilfiger.png'),
		style: {
			width: win.width * 0.2055,
			height: win.width * 0.1527,
			marginLeft: win.width * 0.04166,
			marginTop: win.width * 0.03055
		}
	},
	{
		title: 'Nike',
		image: require('../static/brands/brand_logos/nike.png'),
		style: {
			width: win.width * 0.23055,
            height: win.width * 0.1222,
            marginLeft: win.width*0.036111,
            marginTop: win.width*0.05
		}
	},
	{
		title: 'American Eagle',
		image: require('../static/brands/brand_logos/american_eagle.png'),
		style: {
			width: win.width * 0.2388,
            height: win.width * 0.1305,
            marginLeft: win.width*0.025,
            marginTop: win.width*0.04722
		}
	},
	{
		title: 'Adidas',
		image: require('../static/brands/brand_logos/adidas.png'),
		style: {
			width: win.width * 0.23055,
            height: win.width * 0.1555,
            marginLeft: win.width*0.02777,
            marginTop: win.width*0.030555
		}
	},
	{
		title: 'Puma',
		image: require('../static/brands/brand_logos/puma.png'),
		style: {
			width: win.width * 0.2222,
            height: win.width * 0.11111,
            marginLeft: win.width*0.0333,
            marginTop: win.width*0.05555
		}
	},
	{
		title: 'Zara',
		image: require('../static/brands/brand_logos/zara.png'),
		style: {
			width: win.width * 0.22222,
            height: win.width * 0.03055,
            marginLeft: win.width*0.03333,
            marginTop: win.width*0.0972222
		}
	}
];

function Brand(data) {
	console.log(data);
	return (
		<View style={styles.brand} elevation={5}>
            <View style={styles.brandShadow} ></View>
			<View style={styles.brandLogoContainer}>
            
				<Image style={data.style} source={data.image} />
                
			</View>
			<Text style={styles.brandTitle} >{data.title}</Text>
            <View style={styles.firstCopy} >
                <Text style={styles.firstCopyText} >First Copy</Text>
            </View>
		</View>
	);
}

class Brands extends React.Component {
	render() {
		return (
			<View>
				<View style={styles.title}>
					<Text style={styles.mainTitle}>BRANDS TO CRUSH ON</Text>
					<Text style={styles.subTitle}>Shop our most-loved brands!</Text>
				</View>
				<View style={styles.brandsList}>{brands.map((d) => Brand(d))}</View>
			</View>
		);
	}
}

export default Brands;
