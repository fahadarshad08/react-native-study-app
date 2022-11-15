import { StyleSheet,  Linking, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Fahad Arshad</Text>
      <Text style={styles.paraStyle}>i am a full stack develper</Text>
      <View>
        <Image
        style={styles.imgStyle}
        source={{
          uri: "https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/54374657_1548702655264729_3474391511808868352_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEqzhom7xqfgKTsaXuISF_RxM3mjBczcfvEzeaMFzNx-z43sdSwumRcC8vnDR89pQdlGOP8HTedMEwXeK7HQx-e&_nc_ohc=9Xboi4iL5O0AX_WWpjh&_nc_ht=scontent.flhe5-1.fna&oh=00_AT99lxhs2ggeroID1IfgREm1pTRO0DdoaPPDPbZfBxz-Vw&oe=62E1C64D",

        }}
        /> 
      </View> 
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About Me </Text>
        <Text style={styles.aboutpara}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Text>
      </View>
      <Text style={styles.mainHeaderr}> follow me on social media </Text>
      <View style={styles.menuContainer}>
      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/fahadarshad52/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCczRqFQ8ocXG-0DlLxMFpyQ"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,

  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    fontWeight: 800,
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 40,
    marginBottom: 10,
  },
  paraStyle:{
    marginBottom: 15,
    fontSize: 16,
    color: "#7d7d7d",
  },
  aboutLayout:{
    alignItems: "center",
      backgroundColor: " rgb(128, 159, 255)",
      marginTop: 25,
      height:'35%',
      width: '100%',
  },
  aboutSubHeader:{
    color:"white",
    marginTop: 40,
    fontSize:18,
    fontWeight: "500",

  },

  aboutpara:{
    fontSize: 16,
    color: "white",
    padding : 20 ,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",


  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },

  buttonStyle:{
    marginBottom: 50,
    marginTop: 40,
  },
  mainHeaderr:{
    fontSize: 18,
    color: "#344055",
    fontWeight: 800,
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 40,
    marginBottom: 10,
  },



});

export default About
