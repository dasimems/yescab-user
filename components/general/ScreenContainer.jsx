import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { whiteColor } from '../../assets/colors';

const ScreenContainer = ({children, style}) => {
  return <View style={{ flex: 1, ...style }}>
      <StatusBar style="auto" backgroundColor="white" />

      <SafeAreaView style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </View>;
}

export default ScreenContainer

const styles = StyleSheet.create({})