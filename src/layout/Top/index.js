import { View, Text } from 'react-native'
import React from 'react';
import { Layout, TopNavigation } from '@ui-kitten/components'

const Top = ({navigation, route, title, Group}) => {
  return (
    <Layout>
     <TopNavigation
        title={title}
        accessoryLeft={Group[route.name]}
        accessoryRight={Group[route.name]}
     />
    </Layout>
  )
}

export default Top