import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BasicCar, ComfortCar, PremiumCar } from "../../assets/images";
import { lato } from "../../fonts";
import { blackColor } from "../../assets/colors";

const CarSelectCard = ({ type, title, time, price }) => {
  let carImage = BasicCar;

  switch (type) {
    case "comfort":
      carImage = ComfortCar;
      break;
    case "premium":
      carImage = PremiumCar;
    default:
      break;
  }
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Image
        source={carImage}
        style={{
          resizeMode: "contain",
          width: 40,
          height: 40
        }}
      />

      <View
        style={{
          gap: 3
        }}
      >
        <Text
          style={{
            fontFamily: lato.bold.default
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: lato.regular.default,
            color: blackColor.opacity500
          }}
        >
          {time}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: lato.bold.default
        }}
      >
        ${price}
      </Text>
    </View>
  );
};

export default CarSelectCard;

const styles = StyleSheet.create({});
