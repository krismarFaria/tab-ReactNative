import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-ico-material-design";
import React from "react";



var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component {







  state = {
    screenText: "Press a button",
  };

  changeText = (text) => {
    console.log(text + "has been pressed");
    this.setState({
      screenText: text,
    });
  };

  render() {
    return (
     <View style={styles.container}>
       <View>
         <Text style={{fontSize:30, color:'white'}}>{this.state.screenText}</Text>
         <StatusBar style="light"/>
       </View> 

<View style={styles.navContainer}>
  <View style={styles.navBar}>


<Pressable onPress={() => this.changeText('camera')} style={styles.IconBahave} android_ripple={{borderless:true, radius:50}}>
 <Icon name="camera" height={iconHeight} width={iconWidth} color='#f77f00'/>
</Pressable>
    
<Pressable onPress={() => this.changeText('Chat')} style={styles.IconBahave} android_ripple={{borderless:true, radius:50}}>
 <Icon name="chat-bubble" height={iconHeight} width={iconWidth} color='#f77f00'/>
</Pressable>
    

<Pressable onPress={() => this.changeText('user')} style={styles.IconBahave} android_ripple={{borderless:true, radius:50}}>
 <Icon name="users-social-symbol" height={iconHeight} width={iconWidth} color='#f77f00'/>
</Pressable>

  </View>
</View>

     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f77f00",
    alignItems: "center",
    justifyContent: "center",
  },

  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },


navBar: {
  flexDirection:'row',
  backgroundColor:'#eee',
  width: '90%',
  justifyContent:'space-evenly',
  borderRadius: 40
},

IconBahave:{
  padding: 14
}

});
