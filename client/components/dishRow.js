import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };
  return (
    <View className="flex-row items-center bg-gray-100 p-3 rounded-3xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{ uri: urlFor(item.image).url() }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl font-bold">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgcolor(1) }}
            >
              <Icon.Minus
                height={20}
                width={20}
                stroke={"white"}
                strokeWidth={2}
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgcolor(1) }}
            >
              <Icon.Plus
                height={20}
                width={20}
                stroke={"white"}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
