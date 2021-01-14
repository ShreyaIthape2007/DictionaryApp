import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';
import AppHeader from './AppHeader';


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      word:'',
      definition:'',
      lexicalCategory:''
    }
  }

  getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    return fetch(url)
    .then((data)=>{
      if (data.status===200){
        return data.json()
      }
      else{
        return null
      }
    })

    .then((response)=>{
      var responseObject = response

      if (responseObject){
        var wordData = responseObject.definitons[0]
        var definition =wordData.description
        var lexicalCategory=wordData.type

        this.setState({
          "word":this.state.word,
          "definition":definition,
          "lexicalCategory":lexicalCategory
        })
      }

      else{
        this.setState({
          "word":this.state.word,
          "definition":"Not Found"
        })
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>

      <AppHeader/>

      <Text style={styles.textstyle}>Enter a word to search : </Text>

      <TextInput
      style={styles.inputtext}
      onChangeText={word => this.setState({
        word:word,
        isSearchPressed:false,
        lexicalCategory:'',
        examples:[],
        definition:''
      })}
      value={this.state.word}
    />


    
    <TouchableOpacity style={styles.buttonstyle} 
    onPress={()=>{
      this.setState({isSearchPressed:true})
      this.setState({displayText:this.state.word})
    }}>

    <Text style={styles.textstyle}>Go</Text>
    
    </TouchableOpacity>

    <View>

      <Text style={styles.outputtext}>
        Word :{" "}
      </Text>

      <Text style={{fontSize:18}}>

        {this.state.word}

      </Text>

    </View>

    <View>
      
      <Text style={styles.outputtext}>
        Type :{" "}
      </Text>

      <Text style={{fontSize:18}}>

        {this.state.lexicalCategory}

      </Text>

    </View>

    <View style={{flexDirection:'row',flexWrap:'wrap'}}>

      <Text style={styles.outputtext}>
        Definition:{" "}
      </Text>

      <Text style={{fontSize:18}}>
        {this.state.definition}
      </Text>

    </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },


  inputtext:{
    width:200,
    height:50,
    borderWidth:3,
    alignSelf:'center',
    marginTop:40

  },
  textstyle:{
    fontSize:20,
    marginTop:20,
    alignSelf:'center'


  },

  buttonstyle:{
    width:50,
    height:50,
    backgroundColor:'orange',
    alignSelf:'center'

  },

  outputtext:{
    fontSize:20,
    marginTop:20,
    alignSelf:'center'


  }
  
});
