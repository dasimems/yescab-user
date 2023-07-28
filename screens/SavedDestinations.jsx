import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Button,
  FormInputField,
  LoggedInContainer,
  Logo,
  Nav
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { LocationDot } from "../assets/icons";
import DestinationCard from "../components/general/DestinationCard";

const SavedDestinations = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer showBackFunction headerText="Saved Places">
      <ScrollView
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center"
          }}
        >
          <LocationDot color={primaryColor.opacity300} />

          <FormInputField
            placeholder="Search location"
            style={{
              flex: 1
            }}
            inputStyle={{
              paddingVertical: 5
            }}
          />
        </View>

        <DestinationCard
          title="Ikeja City Mall"
          description="Obafemi Awolowo Way, Ikeja Nigeria"
        />

        <DestinationCard
          title="Ikeja City Mall"
          description="Obafemi Awolowo Way, Ikeja Nigeria"
        />

        <DestinationCard
          title="Ikeja City Mall"
          description="Obafemi Awolowo Way, Ikeja Nigeria"
        />
      </ScrollView>
    </LoggedInContainer>
  );
};

export default SavedDestinations;

const styles = StyleSheet.create({});
