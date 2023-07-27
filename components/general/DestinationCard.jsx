import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LocationPin } from "../../assets/icons";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";
import { lato } from "../../fonts";

const DestinationCard = ({ icon, title, description }) => {
  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
      }}
    >
      <View
        style={{
          backgroundColor: primaryColor.default,
          height: 30,
          width: 30,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {icon ? icon : <LocationPin color={whiteColor.default} />}
      </View>

      <View
        style={{
          gap: 5
        }}
      >
        {title &&
          <Text
            style={{
              fontFamily: lato.bold.default
            }}
          >
            {title}
          </Text>}
        {description &&
          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity600
            }}
          >
            {description}
          </Text>}
      </View>
    </View>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({});
