import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { whiteColor } from "../../assets/colors";

const AppContainer = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="transparent" />

      
        {children}
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
