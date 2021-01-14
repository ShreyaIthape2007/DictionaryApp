import * as React from 'react';
import {Button,View,TouchableOpacity,Text,StyleSheet} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.Appbg}> <Text style={styles.buttonText}> Dictionary Dash </Text> </View>
    )
  }
}


const styles = StyleSheet.create({
  Appbg:{
    marginLeft:20,
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:300,
        height:50,
        backgroundColor:'orange',
        alignSelf:'center'
   

  },
buttonText:{
          fontWeight:'bold',
          fontSize:20,
}
})
export default AppHeader