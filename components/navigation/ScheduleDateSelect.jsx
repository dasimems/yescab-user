import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import { padding } from "../../data/general";
import { lato } from "../../fonts";

const ScheduleDateSelect = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View
      style={{
        gap: 5
      }}
    >
      <Text
        style={{
          fontFamily: lato.bold.default
        }}
      >
        Schedule Ride
      </Text>
      <Text>Wed 2, Jun</Text>
      <Text>12:35 PM - 12:45 PM</Text>

      <View
        style={{
          paddingVertical: padding
        }}
      >
        <DatePicker date={date} onDateChange={setDate} />
      </View>
    </View>
  );
};

export default ScheduleDateSelect;

const styles = StyleSheet.create({});
