import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return;

  return (
    <View className="absolute w-full bottom-5 z-50">
      <StatusBar style="black" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgcolor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center text-white font-extrabold text-lg">
          View Cart
        </Text>
        <Text className=" text-white font-extrabold text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
