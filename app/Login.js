import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const Bg = require('./images/Bg.jpg')

const LoginScreen = () => {
    return (


        <ImageBackground
            source={Bg}
            resizeMode='cover'
            style={styles.imageBg}
        >
            <View style={styles.formContainer}>



                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="Black"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="Black"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',

    },
    profileimg: {
        height: "6rem",
        width: "6rem"
    },
    formContainer: {
        position: 'absolute',
        // backgroundColor: '#F5B3B9',
        bottom: '0',
        height: '78%',
        width: '100%',
        marginHorizontal: 'auto',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: '146px 151px 0px 0px',
        // -webkit-border-radius: '146px 151px 0px 0px', 
        // -moz-border-radius: '146px 151px 0px 0px',
        borderTopRightRadius: '50%',
        borderTopLeftRadius: '50%',

    },
    // heading: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     color: 'black',
    //     marginBottom: 20,
    // },


    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: '14',
        textAlign: 'center',
        width: '60%',
        padding: 10,
        marginBottom: 10,
        color: 'black',
        border: '2px solid black',
        borderRadius: '30px'
    },

    button: {
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        display: 'block',
        paddingBlock: '6px',
        paddingInline: '25px',
        borderRadius: '30px',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    imageBg: {
        // flex: 1,
        // justifyContent: 'center',
        width: "100%",
        height: "100vh",
        marginTop: "auto",
        display: "cover"
    }
});

export default LoginScreen;
