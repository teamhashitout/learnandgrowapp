import { View, Text, Button, Image, StyleSheet } from 'react-native';

const video_card = () => {
    return (
        <View style={styles.video_card}>
            <View style={styles.video_card__image}>
                <Text style={styles.f}>hsf</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    video_card: {
        border: '1px solid black',
        color: 'red',
    },
    icon: {
        fontSize: "2.5rem"
    }
})
export default video_card;