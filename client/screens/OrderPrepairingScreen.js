import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function OrderPrepairingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // move to delivery screen
      navigation.navigate("Delivery");
    }, 3000);
  });
  return (
    <View className="flex-1  justify-center items-center">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: themeColors.bgcolor(1) }}
        className="absolute z-50 rounded-full p-1 shadow top-10 left-5"
      >
        <Icon.ArrowLeft stroke={"white"} strokeWidth={3} />
      </TouchableOpacity>
      <Image
        source={require("../assets/images/delivery.gif")}
        className="h-80 w-80"
      />
    </View>
  );
}
