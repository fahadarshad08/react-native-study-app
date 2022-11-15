import { useNavigation } from "@react-navigation/native";
import react from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const Menu = () => {
    const navigation = useNavigation();
    return(
    <View style={styles.menuContainer} >
        <TouchableOpacity style={styles.buttonStyle} onPress= {()=>navigation.navigate("Course")}>
            <Image  style={styles.iconStyle}
            source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NV_PrOgrOu_4trr0PEpzXtJBb3DbZnzIoA&usqp=CAU",
            }}
            />
            <Text>Course</Text>


        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress= {()=>navigation.navigate("Student")}>
        <Image  style={styles.iconStyle}
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Group_font_awesome.svg/1024px-Group_font_awesome.svg.png",
            }}
            />
            <Text>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress= {()=>navigation.navigate("About")}>
        {/* <Image  style={styles.iconStyle}
            source={{
                uri: "https://static.vecteezy.com/system/resources/thumbnails/004/304/686/small/about-us-text-web-button-template-banner-vector.jpg",
            }}
            /> */}
            <Image
         style={styles.iconStyle}
          source={require("../../assets/about-us.jpg")}
        />

            <Text>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress= {()=>navigation.navigate("Contact")}>
        <Image  style={styles.iconStyle}
            source={{
                uri: "data:image/png;base64,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",
            }}
            />
            <Text>Contact</Text>
        </TouchableOpacity>
              
        </View>
    );
    
};
const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    iconStyle:{
        width:"100%",
        height: 50,
        aspectRatio: 1,


    }

});
export default Menu;