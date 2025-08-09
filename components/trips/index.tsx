import { Destination, Trip as TripType } from "@/data";
import React from "react";
import { View } from "react-native";

type Props = {
  trips: TripType[];
  activeDestination: Destination;
};

const Trips: React.FC<Props> = ({ trips, activeDestination }) => {
  return <View></View>;
};

export default Trips;
