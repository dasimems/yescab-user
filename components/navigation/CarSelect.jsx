import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { lato } from "../../fonts";
import { blackColor, whiteColor } from "../../assets/colors";
import CarSelectCard from "../general/CarSelectCard";
import Button from "../general/Button";
import { ScheduleIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavNames } from "../../data/general";

const CarSelect = () => {
  const paddingHorizontal = 25;
  const { navigate } = useNavigation();
  return (
    <View
      style={{
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
          paddingHorizontal,
          fontFamily: lato.bold.default,
          fontSize: 14
        }}
      >
        Select Car
      </Text>

      <View>
        <CarSelectCard title="Basic" time="3 mins" price="8" />
        <CarSelectCard title="Bubu XL" time="3 mins" price="10" />
        <CarSelectCard title="Bubu Delivery" time="3 mins" price="15" />
      </View>

      <View
        style={{
          paddingHorizontal,
          gap: 10
        }}
      >
        <Button>
          <Text
            style={{
              fontFamily: lato.bold.default,
              color: whiteColor.default
            }}
          >
            Request Ride
          </Text>
        </Button>
        <TouchableOpacity
          onPress={() => {
            navigate(NavNames.ScheduleRide.name);
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
            justifyContent: "center"
          }}
        >
          <ScheduleIcon color={blackColor.opacity500} />
          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity500
            }}
          >
            Schedule for later
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarSelect;

const styles = StyleSheet.create({});
