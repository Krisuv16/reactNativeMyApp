import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Divider } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
    return (
  <SafeAreaView style={styles.container}>
  <View style={{marginTop: 20}}/> 
  
  {profileImage()}
  <Text style={styles.centerText}>General Information</Text>
  {generalInfo()}

  <Text style={styles.additionalCenterText}>Additional Information</Text>

  {additionalInfo()}
  
</SafeAreaView>
    );

  function additionalInfo() {
    return <View style={[styles.contentView]}>
      <Text style={styles.ass}>Phone:        123456789</Text>
      <View style={[styles.dividerLine]} />

      <Text style={[styles.ass]}>Country:     Nepal</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.ass}>Age:           21</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.ass}>Zodiac:      Leo</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.ass}>Birth day:   August 3</Text>
    </View>;
  }

  function generalInfo() {
    return <View style={[styles.contentView]}>
      <Text style={styles.ass}>Name:        Krisuv Bohara</Text>
      <View style={[styles.dividerLine]} />

      <Text style={[styles.ass]}>Address:   Toronto, Canada</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.ass}>College:     Centennial College</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.ass}>Laptop:      MSI</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.ass}>Stack:         React Native</Text>
    </View>;
  }

  function profileImage() {
    return <View style={[styles.imageView]}>
      <Image source={require('./assets/download.jpg')} style={[styles.imageStyle]} />
    </View>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E7E9"
  },
  contentView :{
    borderRadius: 10,
    margin: 20,
    backgroundColor: "white",
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  
  centerText :{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20
  },
  additionalCenterText :{
    textAlign: 'center',
    fontSize: 20
  },
  ass:{
    color: 'darkgrey', padding: 10
  },
  imageView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle:{
    width:150, height:150,resizeMode: 'contain', marginTop: 50, borderRadius: 40
  },
  dividerLine:{
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
