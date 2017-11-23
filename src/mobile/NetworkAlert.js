import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Network from 'react-network'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    color: '#fff',
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center'
  }
})

const OfflineAlertHeader = () => {
  return (
    <View style={styles.container}>
      <Text>You are offline. Please check internet connection</Text>
    </View>
  )
}

const NetworkAlert = props => {
  return (
    <Network
      render={({ online }) => (online ? null : <OfflineAlertHeader />)}
    />
  )
}

export default NetworkAlert
