import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AngleRight, UserVerified } from "../../assets/icons";
import { lato } from "../../fonts";
import { blackColor } from "../../assets/colors";
import { useNavigation } from "@react-navigation/native";

const ProfileRoute = ({ icon, title, description, name, titleStyle }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (name) {
          navigate(name);
        }
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >
        {/* {icon ? icon : <UserVerified />} */}

        <View
          style={{
            gap: 6
          }}
        >
          <Text
            style={{
              fontFamily: lato.bold.default
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <AngleRight color={blackColor.opacity600} />
    </TouchableOpacity>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({});
