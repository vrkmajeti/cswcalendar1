import React, { Component } from 'react';
import { TouchableHightLight, Text, View } from 'react-native';
import AtoZListView from 'react-native-atoz-listview';
import Search from 'react-native-search-box';

 

export default class SearchData extends Component {

  state = {
    data: {
      "A": [
        {
          "name": "Anh Tuan Nguyen",
          "age": 28
        },
        {
          "name": "An Nhien",
          "age": 2
        },
      ],
      "Z": [
        {
          "name": "Thanh Tu Pham",
          "age": 32
        },
        {
          "name": "Tien Thanh",
          "age": 24
        },
      ]
    }
  }

    renderRow = (item, sectionId, index) => {
      return (
        <TouchableHightLight
          style={{
            height: 80,
            justifyContent: 'center',
            alignItems: 'center'}}
        >
          <Text>{item.name}</Text>
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

  render() {
    // inside your render function
    return (
      <View style={{ flex: 1}}>
        <Search
          ref="search_box"
          /**
          * There many props that can customizable
          * Please scroll down to Props section
          */
        />

        <AtoZListView
          data={this.state.data}
          renderRow={this.renderRow}
          rowHeight={80}
          sectionHeaderHeight={40}
        />
      </View>
    );
  }
}

