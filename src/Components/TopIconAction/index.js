import React,{ useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SessionUserContext } from '../../Context/SessionUserContext';
import { AccessGroup } from '../../Screens/Routes';
import { TopNavigation, Icon, Popover, Layout, Text } from '@ui-kitten/components';


const MoreVertical = (props) => {
  return <Icon {...props} name='more-horizontal-outine' />
}


export const TopIconAction = ({ navgation }) => {
  return (
    <View>
      <Text>TopIconAction</Text>
    </View>
  );
};
