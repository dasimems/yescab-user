import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";
import { lato } from "../../fonts";
import { LocationDot, LocationPin } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavNames } from "../../data/general";

const ScheduleCard = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(NavNames.TripDetails.name, { id: 1 });
      }}
      style={{
        elevation: 2,
        shadowColor: blackColor.opacity300,
        shadowOffset: {
          width: 0,
          height: 1
        },

        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius: 17,
        overflow: "hidden",
        padding: 2
      }}
    >
      <View
        style={{
          backgroundColor: whiteColor.default,
          // borderColor:blackColor.opacity100,
          // borderWidth:1,
          padding: 20,
          borderRadius: 15,
          gap: 20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: blackColor.opacity300
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10
            }}
          >
            <Text
              style={{
                fontFamily: lato.bold.default
              }}
            >
              June 3, 2021 12:30pm
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontFamily: lato.bold.default,
                fontSize: 11,
                borderWidth: 2,
                borderColor: primaryColor.default,
                borderRadius: 100,
                color: primaryColor.opacity700,
                position: "relative"
              }}
            >
              Trip in 2 days
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10
            }}
          >
            <View
              style={{
                height: 100,
                justifyContent: "space-between",
                alignItems: "center",
                gap: 5
              }}
            >
              <LocationDot color={primaryColor.opacity500} />
              <View
                style={{
                  flex: 1,
                  gap: 5
                }}
              >
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10
                  }}
                />
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10
                  }}
                />
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10
                  }}
                />
                <View
                  style={{
                    flex: 1 / 4,
                    width: 3,
                    backgroundColor: primaryColor.opacity200,
                    borderRadius: 10
                  }}
                />
              </View>
              <LocationPin color={primaryColor.default} />
            </View>

            <View
              style={{
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{
                  fontFamily: lato.regular.default
                }}
              >
                Ikeja City Mall, Alausa Road, Ikeja
              </Text>
              <Text
                style={{
                  fontFamily: lato.regular.default
                }}
              >
                Shoprite Event Centre, Ikeja
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({});
