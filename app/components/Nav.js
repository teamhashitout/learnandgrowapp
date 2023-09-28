import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { RiMenu3Fill } from 'react-icons/ri';
import { PiUserCircleLight } from 'react-icons/pi';
import { CgMenuRight } from 'react-icons/cg';
import { BiSearchAlt } from 'react-icons/bi';
import IonicIcons from 'react-native-vector-icons/Ionicons';


const Nav = () => {
    return (
        <View style={styles.navigation}>
            <PiUserCircleLight style={styles.icon} />
            <IonicIcons name="menu-outline" size={30} color="black" />        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '60px',
    },
    icon: {
        fontSize: 20
    }
})
export default Nav;