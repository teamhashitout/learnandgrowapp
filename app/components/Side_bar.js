import { View, Text, Button, Image, StyleSheet } from 'react-native';



const Side_bar = () => {
    return (
        <View style={style.Side_bar}>
            <View style={style.profile_info}>
                <Text style={style.text}>Heool</Text>
            </View>
        </View>
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
        fontSize:20
    }
})
export default Side_bar;