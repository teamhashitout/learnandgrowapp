import { View,Text,StyleSheet } from 'react-native';

const Test =()=>{
    return(
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    }
})
export default Test;