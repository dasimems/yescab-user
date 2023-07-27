import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blackColor, whiteColor } from "../../assets/colors";
import { lato } from "../../fonts";
import FormInputField from "../general/FormInputField";
import { Search } from "../../assets/icons";
import DestinationCard from "../general/DestinationCard";

const SearchDestination = () => {
  return (
    <View
      style={{
        padding: 25,
        paddingVertical: 35,
        backgroundColor: whiteColor.default,
        borderRadius: 20,
        position: "absolute",
        width: "100%",
        bottom: 0,
        gap: 15
      }}
    >
      <Text
        style={{
          fontFamily: lato.bold.default,
          fontSize: 25,
          color: blackColor.opacity600
        }}
      >
        Good Morning John
      </Text>
      <Text
        style={{
          fontFamily: lato.regular.default,
          color: blackColor.opacity600
        }}
      >
        Where are you going?
      </Text>

      <TouchableOpacity>
        <FormInputField
          floatLeftIcon={<Search color={blackColor.opacity500} />}
          placeholder="Search Destination"
        />
      </TouchableOpacity>

      <DestinationCard
        title="Ikeja City Mall"
        description="Obafemi Awolowo Way, Ikeja Nigeria"
      />
      <DestinationCard
        title="Ikeja City Mall"
        description="Obafemi Awolowo Way, Ikeja Nigeria"
      />
    </View>
  );
};

export default SearchDestination;

const styles = StyleSheet.create({});
