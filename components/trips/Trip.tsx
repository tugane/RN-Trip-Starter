import { Trip as TripType } from "@/data";
import React from "react";
import { View } from "react-native";

type Props = {
  data: TripType & { destination_title: string };
};

const Trip: React.FC<Props> = ({
  data: { title, distance, destination_title, image },
}) => {
  return <View></View>;
};

export default Trip;
