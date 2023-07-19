import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  LoggedInContainer,
  Logo,
  Nav,
  ProfileDetailsCard,
  RoundedImage,
  TripCard,
} from "../components";
import {
  blackColor,
  dangerColor,
  primaryColor,
  secondaryColor,
  successColor,
  whiteColor,
} from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { trips } from "../data/tripsData";
import { padding } from "../data/general";
import { AngleLeft, AngleRight, Money, StarIcon } from "../assets/icons";
import { MaleAvatarOne } from "../assets/images";

const TripDetails = () => {
  const { navigate, goBack } = useNavigation();
  const { params } = useRoute();
  const { id } = params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      var tripDetails = trips.find((trip) => trip.id === id);

      if (tripDetails) {
        setDetails(tripDetails);
      } else {
        goBack();
      }
    } else {
      goBack();
    }
  }, [id]);
  return (
    <LoggedInContainer
      headerText={"Trip Details"}
      containerStyle={{
        paddingHorizontal: 0,
      }}
      showBackFunction
      headerTextStyle={16}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text
          style={{
            backgroundColor: "rgba(0, 0, 0, .05)",
            textAlign: "center",
            marginTop: 7,
            fontSize: 12,
            paddingVertical: 4,
            paddingHorizontal: 10,
            color:
              details &&
              details.status &&
              details.status.toLowerCase() === "completed"
                ? successColor.opacity800
                : dangerColor.opacity800,
          }}
        >
          {details &&
          details.status &&
          details.status.toLowerCase() === "completed"
            ? "TRIP COMPLETED"
            : "TRIP CANCELLED"}
        </Text>

        <View
          style={{
            paddingHorizontal: padding,
          }}
        >
          <TripCard
            plain
            id={details?.id}
            price={details?.price}
            to={details?.trip?.to}
            from={details?.trip?.from}
          />
        </View>

        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: blackColor.opacity100,
          }}
        ></View>

        <ProfileDetailsCard
          title={
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Money color={primaryColor.default} />

                <Text
                  style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity600,
                  }}
                >
                  Cash Payment
                </Text>
              </View>
            </>
          }
          value={
            <>
              <Text
                style={{
                  fontFamily: lato.bold.default,
                  color: blackColor.default,
                }}
              >
                $8
              </Text>
            </>
          }
          style={{
            paddingVertical: 20,
            backgroundColor: primaryColor.opacity100,
            paddingHorizontal: padding,
          }}
        />

        <View
          style={{
            paddingHorizontal: padding,
            paddingVertical: 15,
            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: lato.bold.default,
              }}
            >
              Distance
            </Text>
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600,
              }}
            >
              10.4km
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: lato.bold.default,
              }}
            >
              Duration
            </Text>
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600,
              }}
            >
              20 mins
            </Text>
          </View>

          <View
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
                gap: 6,
              }}
            >
              <RoundedImage image={MaleAvatarOne} size={40} />

              <Text
                style={{
                  fontFamily: lato.bold.default,
                  color: blackColor.opacity600,
                }}
              >
                {details?.passengerName}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
              }}
            >
              <StarIcon size={12} color="#FFBA40" set="bold" />

              <Text
                style={{
                  fontFamily: lato.regular.default,
                  color: blackColor.opacity600,
                }}
              >
                {4.9}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "rgba(0,0,0,.07)",
            paddingVertical: 20,
            paddingHorizontal: padding,
          }}
        >
          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity700,
            }}
          >
            Need Help?
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: padding,
          }}
        >
          <ProfileDetailsCard
            style={{
              ...styles.actionStyle,
            }}
            title="Passenger lost an item"
            value={<AngleRight color={blackColor.opacity700} />}
          />
          <ProfileDetailsCard
            style={{
              ...styles.actionStyle,
            }}
            title="Passenger was rude"
            value={<AngleRight color={blackColor.opacity700} />}
          />
          <ProfileDetailsCard
            style={{
              ...styles.actionStyle,
            }}
            title="Security Issues"
            value={<AngleRight color={blackColor.opacity700} />}
          />
        </View>
      </ScrollView>
    </LoggedInContainer>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  actionStyle: {
    paddingVertical: 20,
  },
});
