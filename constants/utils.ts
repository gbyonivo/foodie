import { Dimensions } from "react-native";

export const getWidthByRatio = (ratio: number): number =>
  Dimensions.get("screen").width * ratio;
export const getHeighByRatio = (ratio: number): number =>
  Dimensions.get("screen").height * ratio;
