import { Destination } from "@/data";
import React from "react";
import { View } from "react-native";

type Props = {
  destinations: Destination[];
  activeDestination: Destination;
  setActiveDestination: React.Dispatch<React.SetStateAction<Destination>>;
};

const Destinations: React.FC<Props> = ({
  destinations,
  activeDestination,
  setActiveDestination,
}) => {
  return <View></View>;
};

export default Destinations;
