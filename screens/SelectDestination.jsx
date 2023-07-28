import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Button,
  FormInputField,
  LoggedInContainer,
  Logo,
  Nav
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { LocationDot, LocationPin, StarIcon } from "../assets/icons";
import DestinationCard from "../components/general/DestinationCard";
import { NavNames } from "../data/general";

const SelectDestination = () => {
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();
  const formRef = useRef(null);

  const focusInput = useCallback(() => {
    const input = formRef.current;

    input.focus();
  }, []);

  useEffect(
    () => {
      if (isFocused) {
        focusInput();
      }
    },
    [isFocused]
  );
  return (
    <LoggedInContainer showBackFunction headerText="Select Destination">
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
          <View
            style={{
              gap: 3,
              alignItems: "center"
            }}
          >
            <LocationDot color={primaryColor.opacity600} />

            <View
              style={{
                height: 80,
                alignItems: "center",
                gap: 6
              }}
            >
              <View
                style={{
                  backgroundColor: primaryColor.opacity300,
                  width: 3,
                  flex: 1 / 6,
                  borderRadius: 20
                }}
              />
              <View
                style={{
                  backgroundColor: primaryColor.opacity300,
                  width: 3,
                  flex: 1 / 6,
                  borderRadius: 20
                }}
              />
              <View
                style={{
                  backgroundColor: primaryColor.opacity300,
                  width: 3,
                  flex: 1 / 6,
                  borderRadius: 20
                }}
              />
              <View
                style={{
                  backgroundColor: primaryColor.opacity300,
                  width: 3,
                  flex: 1 / 6,
                  borderRadius: 20
                }}
              />
              <View
                style={{
                  backgroundColor: primaryColor.opacity300,
                  width: 3,
                  flex: 1 / 6,
                  borderRadius: 20
                }}
              />
              <View
                style={{
                  backgroundColor: primaryColor.opacity300,
                  width: 3,
                  flex: 1 / 6,
                  borderRadius: 20
                }}
              />
            </View>

            <LocationPin color={primaryColor.default} />
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flex: 1,
              height: 150
            }}
          >
            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: blackColor.opacity200,
                borderRadius: 15
              }}
            >
              <Text>Ikeja City Mall</Text>
            </View>

            <FormInputField
              ref={formRef}
              placeholder="Where will you like to go/"
            />
          </View>
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
          action={() => {
            navigate(NavNames.SavedDestinations.name);
          }}
          title="Saved Places"
          description="Select from previously saved location"
          icon={<StarIcon color={whiteColor.default} set="bold" />}
          hideBorder
        />
      </ScrollView>
    </LoggedInContainer>
  );
};

export default SelectDestination;

const styles = StyleSheet.create({});
