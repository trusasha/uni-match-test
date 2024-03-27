import { RouteProp } from "@react-navigation/native";
import { SCREENS } from "./screens";

export type ScreenParams = {
  [SCREENS.FEED]: undefined;
  [SCREENS.DETAILS]: {id: string};
}

export type RouteParams<T extends keyof ScreenParams> = RouteProp<ScreenParams, T>;