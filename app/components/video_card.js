import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';

const Video_card = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <View style={styles.grid}>
        <TouchableOpacity style={styles.videoButton}>
          <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoButton}>
          <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoButton}>
          <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoButton}>
          <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoButton}>
          <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoButton}>
          <Image style={styles.videoIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}>
          <Image style={styles.tabIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image style={styles.tabIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image style={styles.tabIcon} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BBD0',
    border: '1px solid #000000'
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
  videoIcon: {
    width: 50,
    height: 50,
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
