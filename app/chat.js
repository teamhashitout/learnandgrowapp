import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import HomeScreen from './HomeScreen'; // Import your screen components
import DetailsScreen from './DetailsScreen';


export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <View style={styles.container}>
        <View style={styles.chat_navigation}>
            
        </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1, // User ID
        }}
      />
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android's status bar

  },
});
