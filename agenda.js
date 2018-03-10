import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {Agenda} from 'react-native-calendars';


export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri: 'https://unwomen.sharepoint.com/Style%20Library/Unwomen/Images/logo-simple.png'
    };
    return (
      
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-03-08'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        renderKnob={this.renderKnob.bind(this)}
        theme={{
          //...calendarTheme,
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue'
        }}
        //theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //markingType={'period'}
        monthFormat={'yyyy'}

        renderDay={(day, item) => (<Text>{day ? day.day: ''}   </Text>)}
      />
    );
  }

  renderRow = (item, sectionId, index) => {
    return (
      <TouchableHightLight
        style={{
          height: rowHeight,
          justifyContent: 'center',
          alignItems: 'center'}}
      >
        <Text>{item.title}</Text>
      </TouchableHightLight>
    );
  }

// Important: You must return a Promise
beforeFocus = () => {
  return new Promise((resolve, reject) => {
      console.log('beforeFocus');
      resolve();
  });
}

// Important: You must return a Promise
onFocus = (text) => {
  return new Promise((resolve, reject) => {
      console.log('onFocus', text);
      resolve();
  });
}

// Important: You must return a Promise
afterFocus = () => {
  return new Promise((resolve, reject) => {
      console.log('afterFocus');
      resolve();
  });
}


  loadItems(day) {
    setTimeout(() => {
    fetch('https://unwrndstorage.blob.core.windows.net/csw62/eventCalender.json')
    .then((response) => response.json())
    .then((responseJson) => {
      var events=responseJson;
      this.loadEvents(events,day);
      //var id=events[0].idSch;
      //Alert.alert(String(id));
    })
    .catch((error) => {
      console.error(error);
    });
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }
    loadEvents(jsonResponse,day){
     //this.state.items[strTime] = [];
     for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        var daysEvents=jsonResponse.filter(function(item){
            return item.daystamp.split('T')[0]==strTime;
          }).map(function(item){
            delete item.state;
            return item;
          });

        var length = daysEvents.length;
        if (!this.state.items[strTime]) {
            this.state.items[strTime] = [];
          for (let j = 0; j < length; j++) {
            this.state.items[strTime].push({
              idSch:daysEvents[j].idSch,
              title: daysEvents[j].title,
              dates: daysEvents[j].dates,
              organizers: daysEvents[j].organizers,
              address: daysEvents[j].address,
              roomName: daysEvents[j].roomName,
              hourlabel: daysEvents[j].hourlabel,
              capacity: daysEvents[j].capacity,
              speaker:daysEvents[j].rsvpEmail,
            });
          }
        }
     }
    }

  renderItem(item) {
  
    return (
      <View style={{flex:1}} >
      
        <TouchableOpacity style={styles.menu} 
        onPress={() =>
          { this.props.navigation.navigate('agendaDetails',item
          //{id:"1",organizers:organizers.title,hourlabel:item.hourlabeltitle:item.title}
        )}}    >
            <View style={styles.item}>
              <Text style={styles.lblheader}>     {item.hourlabel}</Text>
              <Text style={styles.lbltitle}>     {item.title}</Text>
              <Text style={styles.lblothers}>     {item.organizers}</Text>
              <Text style={styles.lblheader}>     {item.roomName}</Text>
              <Text></Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }

renderKnob() {
    return (
      <View style={styles.emptyDate}></View>
    );
  }
  onEventPress() {
    this.props.navigator.push({
      screen: 'agendaDetails',
      title: 'Event Details',
      id:'rajendra',
      //item:item
     // item:this.abc
    });
  }

 renderEmptyDate() {
    return (
      <View style={styles.emptyDate}></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.title !== r2.title;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
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
    marginRight: 10,
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
    marginTop: 5
     
 },
 lbltitle:{
  color:'#524f4a',
  //fontWeight:'bold',
  fontSize:15,
  marginTop: 5
},
lbldates:{
  color:'orange',
  //fontWeight:'bold',
  fontSize:12
},
lblothers:{
  color:'#524f4a',
  //fontWeight:'bold',
  fontSize:12,
  marginTop: 17
  
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
