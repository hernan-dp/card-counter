/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/native";
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Application Screen. Params definition of screens
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// Application Tabs.
export type RootTabParamList = {
  Home: undefined;
  Stock: undefined;
  Package: undefined;
  Withdrawal: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type TabType = {
  id: number;
  name: string;
  component: React.FC;
  options: () => BottomTabNavigationOptions;
};

export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >
>;

export type AppStackRoutesType = StackRoutesType<RootStackParamList>;

export type ScreenComponent = React.FC;
