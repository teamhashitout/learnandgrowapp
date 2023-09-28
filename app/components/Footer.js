import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import IonicIcons from 'react-native-vector-icons/Ionicons';





const Footer = () => {
    return (
        <View style={styles.container}>
            <Link href='/'>
                <TouchableOpacity onPress={() => console.log('Home Pressed')}>
                <IonicIcons name="home-outline" size={30} color="black" />

                </TouchableOpacity>
            </Link>
            <Link href='/account'>
                <TouchableOpacity onPress={() => console.log('Test Pressed')}>
                <IonicIcons name="stats-chart-outline" size={30} color="black" />
                </TouchableOpacity>
            </Link>
            <Link href='/chat'>
                <TouchableOpacity onPress={() => console.log('Account Pressed')}>
                <IonicIcons name="chatbubbles-outline" size={30} color="black" />
                </TouchableOpacity>
            </Link>
            <Link href='/test'>
                <TouchableOpacity onPress={() => console.log('Lectures Pressed')}>
                <IonicIcons name="person-outline" size={30} color="black" />
                </TouchableOpacity>
            </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        boder: '2px black solid',
        color: 'red',
        marginTop: "auto",
        width: "90%",
        backgroundColor: "#F5B3B9",
        marginBottom: "1rem",
        height: "3.5rem",
        borderRadius: "1rem",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})
export default Footer;