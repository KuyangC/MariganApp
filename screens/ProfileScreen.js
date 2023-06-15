import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#fff", height: "100%"}}>
      <Text style={{fontSize: 24, color: "#FF5A60", fontWeight: "bold", marginLeft: 40, marginTop: 50, marginBottom: 10}}>Profile</Text>
      <View style={{flexDirection: "row", marginTop: 40 ,gap: 10, marginLeft: 40, marginVertical: 5}}>
        <Image style={{width: 100, height: 100, borderRadius: 100/2}}source={require("../assets/PhotoProfile.jpg")}/>
        <Text style={{fontSize: 18,  marginVertical: 35, marginHorizontal: 10,fontWeight: "bold"}}>Azizi Azadel</Text>
      </View>
      <View style={{marginTop: 30, marginLeft: 40,}}>
        <Text style={{fontSize: 16, fontWeight: "bold"}}>Email</Text>
        <Text style={{fontSize: 15, marginTop: 3,}}>akucintaAzizi@email.com</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 40,}}>
        <Text style={{fontSize: 16, fontWeight: "bold"}}>Phone</Text>
        <Text style={{fontSize: 14, marginTop: 3}}>12345678910</Text>
      </View>
      <View style={{marginTop:40, marginLeft: 40,}}>
        <Text style={{fontSize: 16, fontWeight: "bold"}}>MyTrip</Text>
      </View>
      <View style={{marginTop:40, marginLeft: 40,}}>
        <Text style={{fontSize: 16, fontWeight: "bold"}}>TripList</Text>
      </View>
      <View style={{marginTop:40, marginLeft: 40,}}>
        <Text style={{fontSize: 16, fontWeight: "bold"}}>Terms of Service</Text>
      </View>
      <View style={{marginTop:40, marginLeft: 40}}>
        <Text style={{fontSize: 16, fontWeight: "bold", color: "#F24C3D"}}>Logout</Text>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
