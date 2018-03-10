import { AppRegistry } from 'react-native';

import {TabNavigator,StackNavigator} from 'react-navigation';
import AgendaScreen from './agenda';
import agendaDetails from './agendaDetails';
//import SearchData from './search';

import Drawer from 'react-native-drawer'

export const details  = StackNavigator({
  Agenda: { screen: AgendaScreen
            ,navigationOptions:{
              title:'Agenda'
                  } 
},
  agendaDetails: { screen: agendaDetails 
                  ,navigationOptions:{
                      title:'Agenda Details'
                      }
  },
 
});
// export const mywindows = TabNavigator({
//   Agenda: { screen: details  },
//   //Search: { screen: SearchData  },
// });

export default details;