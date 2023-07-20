import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AngleRight, UserVerified } from "../../assets/icons";
import { lato } from "../../fonts";
import { blackColor } from "../../assets/colors";

const ProfileRoute = ({ title, description, name }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <UserVerified />

        <View
          style={{
            gap: 6,
          }}
        >
          <Text
            style={{
              fontFamily: lato.bold.default,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity600,
            }}
          >
            {description}
          </Text>
        </View>
      </View>

      <AngleRight />
    </TouchableOpacity>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({});
