import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import Video_card from "./components/video_card";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Nav />
      </View>
      <View style={styles.user_greet}>
        <Text style={styles.greet}>Hello</Text>
        <Text style={styles.user_name}>Shreya</Text>
      </View>
      <View style={styles.video_card}>
        <Video_card/>
      </View>
      <Footer style={styles.footer} />
     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF5F2',
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',

  },
  user_greet: {
    width: '80px',
    height: '40px'
  },
  greet: {
    width: '18',
    fontWeight: '500',

  },
  user_name: {
    fontWeight: '700',
    fontSize: '22px',
  },
  footer:{
    
  }
});
