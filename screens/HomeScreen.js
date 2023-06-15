import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [text, setText] = useState("")

  function test(currentText){
    setText(currentText)
  }

  return (
    <SafeAreaView style={{backgroundColor: "#fff", height: "100%"}}>
      <Text style={{marginLeft: 35, marginTop: 50, marginBottom: 20, fontSize: 24, color: "#FF5A60", fontWeight: "bold"}}>Home</Text>
      <View style={{alignItems: "center"}}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => test(value)}
          value={text}
          placeholder="cari"
        />
      </View>
      <View>
        <View style={{alignItems: "center", marginVertical: 10}}>
          <Image source={require("../assets/home1.png")} />
        </View>
        <Text style={{marginLeft: 40, fontSize: 18, fontWeight: "bold"}}>Rawa Buntu, BSD</Text>
        <Text style={{marginLeft: 40, fontSize: 16, fontWeight: 400}}>Taman Jajan BSD</Text>
        <View style={{flexDirection: "row", gap: 10, marginLeft: 40, marginVertical: 5}}>
          <Image source={require("../assets/Star1.png")}/>
          <Text style={{fontSize: 16,  marginTop: -2,}}>4.7</Text>
        </View>
      </View>

      <View>
        <View style={{alignItems: "center", marginVertical: 10}}>
          <Image source={require("../assets/home2.png")} />
        </View>
        <Text style={{marginLeft: 40, fontSize: 18, fontWeight: "bold"}}>Kedai Healer Coffe</Text>
        <Text style={{marginLeft: 40, fontSize: 16, fontWeight: 400}}>Pamulang, Tangerang Selatan</Text>
        <View style={{flexDirection: "row", gap: 10, marginLeft: 40, marginVertical: 5}}>
          <Image source={require("../assets/Star1.png")}/>
          <Text style={{fontSize: 16, marginTop: -2,}}>4.9</Text>
        </View>
      </View>


      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    width: "85%",
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 30,
    borderColor: "#C4C4C4"
  },

});
