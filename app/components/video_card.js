import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';

const Video_card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.section_title}>Recent</Text>

            <View style={styles.video_scroll}>
                <View style={styles.video_card}>
                    <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
                    <View style={styles.card_content}>
                        <Text style={styles.card_title}>Mathematics</Text>
                        <Text style={styles.card_discription}>This is the app created for slow learners to cope up their learning skills</Text>
                    </View>
                    <Button
                        title="continue"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // border: '1px solid #000000',
        marginVertical: '15px',
    },
    section_title: {
        fontWeight: '600',
        fontSize: '16px',
        color: '#444444',
        lineHeight: '2'
    },
    video_scroll: {
        border: '1px solid #000000',
        display: 'flex',
        width: '100%',
        // overflow: 'auto',
        flexDirection: 'row',
    },
    video_card: {
        display: 'flex',
        // alignItems: 'center',
        gap: '10px',
        // justifyContent: 'center',
        flexDirection: 'row',
        width: '90%',
        height: '100px',
    },
    videoIcon: {
        width: '100px',
        height: '100%',
    },
    card_content: {
        maxWidth: 'calc(100% - 100px)',
    },
    card_title: {
        fontWeight: '600',
        lineHeight: '1.5'
    },
    searchBar: {
        height: 40,
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    videoButton: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#F44336',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    tabButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
    },
});

export default Video_card;
