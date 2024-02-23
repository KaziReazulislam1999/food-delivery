import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "slategray",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: themeColors.bgcolor(1) }}
        className="absolute z-50 rounded-full p-1 shadow top-10 left-5"
      >
        <Icon.ArrowLeft stroke={"white"} strokeWidth={3} />
      </TouchableOpacity>
      {/* map view */}
      <MapView
        className="flex-1"
        style={{ width: Dimensions.get("window").width }}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        {
          <Marker
            className="rounded-full"
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgcolor(1)}
          />
        }
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 mb-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image
            source={require("../assets/images/bikeGuy2.gif")}
            className="h-24 w-24"
          />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgcolor(0.8) }}
          className="p-2 flex-row items-center rounded-full my-5 mx-2 "
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              source={require("../assets/images/deliveryman.jpg")}
              className="h-16 w-16 rounded-full"
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Reazul Islam</Text>
            <View className="">
              <Text className="font-semibold text-white">Your Rider</Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgcolor(1)}
                stroke={themeColors?.bgcolor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => cancelOrder()}
              className="bg-white p-2 mr-2 rounded-full"
            >
              <Icon.X stroke={"red"} strokeWidth={3} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
