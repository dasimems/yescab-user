import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useCallback } from "react";
import {
  Button,
  LoggedInContainer,
  Logo,
  Nav,
  RideBooked,
  RoundedImage
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import {
  AngleDown,
  LocationDot,
  LocationPin,
  Pending,
  StarIcon
} from "../assets/icons";
import { ToyotaCar } from "../assets/images";
import { useActionContext } from "../context";
import { NavNames } from "../data/general";

const ScheduleDetails = ({ title, value }) => {
  return (
    <View
      style={{
        gap: 3
      }}
    >
      <Text
        style={{
          fontFamily: lato.regular.default,
          fontSize: 12,
          color: blackColor.opacity600
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: lato.regular.default,
          color: blackColor.opacity700
        }}
      >
        {value}
      </Text>
    </View>
  );
};

const ScheduleRide = () => {
  const { navigate } = useNavigation();
  const { openModal, closeModal } = useActionContext();

  const rideBooked = useCallback(() => {
    openModal({
      content: <RideBooked />
    });
    setTimeout(() => {
      closeModal();
      navigate(NavNames.Navigation.name);
    }, 3000);
  }, []);
  return (
    <LoggedInContainer showBackFunction headerText="Schedule Ride">
      <ScrollView contentContainerStyle={{ gap: 20, paddingVertical: 20 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItem: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: blackColor.opacity100,
            paddingVertical: 30,
            paddingTop: 10
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <RoundedImage size={60} />

            <View style={{ gap: 7 }}>
              <Text style={{ fontFamily: lato.bold.default, fontSize: 20 }}>
                John Alfred
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Pending size={15} color={blackColor.opacity300} />
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600
                  }}
                >
                  3 Min
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <StarIcon set="bold" color="rgba(255, 186, 64, 1)" />
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600
                  }}
                >
                  4.8
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Image
              source={ToyotaCar}
              style={{ width: 80, height: 40, resizeMode: "contain" }}
            />
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600
              }}
            >
              Toyota Camry
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: blackColor.opacity200,
            paddingVertical: 20
          }}
        >
          <Text style={{ fontFamily: lato.bold.default, fontSize: 20 }}>
            Trip Details
          </Text>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={{ gap: 3, alignItems: "center" }}>
              <LocationDot color={primaryColor.opacity600} />

              <View style={{ height: 80, alignItems: "center", gap: 6 }}>
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
              style={{ justifyContent: "space-between", flex: 1, height: 180 }}
            >
              <View
                style={{ paddingVertical: 15, paddingHorizontal: 10, gap: 6 }}
              >
                <Text style={{ fontFamily: lato.bold.default }}>
                  Shoprite Event Center
                </Text>
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600
                  }}
                >
                  Obafemi Awolowo Way, Ikeja Nigeria
                </Text>
              </View>
              <View
                style={{ paddingVertical: 15, paddingHorizontal: 10, gap: 6 }}
              >
                <Text style={{ fontFamily: lato.bold.default }}>
                  Ikeja City Mall
                </Text>
                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600
                  }}
                >
                  Obafemi Awolowo Way, Ikeja Nigeria
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: primaryColor.default }}>
                    Change Destination
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ gap: 15 }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: lato.black.default,
                color: primaryColor.default,
                fontSize: 16
              }}
            >
              VISA
            </Text>
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600
              }}
            >
              ***5674
            </Text>
            <AngleDown color={blackColor.opacity400} />
          </View>

          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity600
            }}
          >
            You will have to pay the above price unless you change your
            destination
          </Text>

          <Text style={{ fontFamily: lato.bold.default }}>Schedule</Text>
          <ScheduleDetails title="Date" value="Wed 2, Jun" />
          <ScheduleDetails title="Pick up" value="12:35 PM - 12:45 PM" />
        </View>
      </ScrollView>

      <View style={{ paddingVertical: 20 }}>
        <Button onPress={rideBooked}>
          <Text style={{ color: whiteColor.default }}>Schedule</Text>
        </Button>
      </View>
    </LoggedInContainer>
  );
};

export default ScheduleRide;

const styles = StyleSheet.create({});
