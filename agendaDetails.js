import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Flex
} from 'react-native';

export default class agendaDetails extends Component{
    // static navigationOptions = {
    //     title: 'Event Details',
    //   };
    render(){
        let pic = {
            uri: 'https://unwomen.sharepoint.com/Style%20Library/Unwomen/Images/logo-simple.png'
          };
            const {title,hourlabel,organizers,roomName,address,capacity,speaker,dates} = this.props.navigation.state.params;
            return(
                <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}} >
                <Text>&nbsp;</Text>
                
                <Image source={pic} style={{width: '100%', height:'20%'}}/>
                <View  style={styles.item}>
                <Text style={styles.lbltitle}>   {title} </Text>
                <Text style={styles.lblheader}>{roomName} ( {dates} ) </Text>
                <View >
                {/* <Text style={styles.lblheader}>     {hourlabel}</Text> */}
                <Text > {'\n'} Organizers:   </Text>
                <Text style={styles.lblheader}>     {organizers}</Text>
                <Text > {'\n'} Venue:   </Text>
                <Text style={styles.lblheader}>     {roomName}</Text>
                <Text > {'\n'} Capacity:   </Text>
                <Text style={styles.lblheader}>     {capacity}</Text>
                <Text > {'\n'} Speaker:   </Text>
                <Text style={styles.lblheader}>     {speaker}</Text>
                <Text > {'\n'} Address:   </Text>
                <Text style={styles.lbldates}>     {address}</Text>
                <Text></Text>
                </View>
              </View>
              
              </View>
            );
        
    }
}

const styles = StyleSheet.create({
    mainRowColor:{
      alignContent:'center'
  },
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
       
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex:1,
      paddingTop: 30
    },
    lblValue:{
      color:'red',
      fontWeight:'bold',
      fontSize:14
  },
  lblheader:{
    color:'#e8a747',
    //fontWeight:'bold',
    fontSize:12,
    marginTop: 5,
    marginLeft: 10,
     
 },
 lbltitle:{
  color:'#524f4a',
  //fontWeight:'bold',
  fontSize:20,
  marginTop: 5,
  marginLeft: 5,
},
lbldates:{
  color:'#23c6c8',
  //fontWeight:'bold',
  fontSize:13,
  marginRight: 10,
},
lblothers:{
  color:'#524f4a',
  //fontWeight:'bold',
  fontSize:12,
  marginTop: 17,
  marginRight: 10,
  
},
  alternateRowColor:{
      backgroundColor :'skyblue',
        alignContent:'center'
  },
  mainRowColor:{
      backgroundColor :'gray',
        alignContent:'center'
  }
  });
  