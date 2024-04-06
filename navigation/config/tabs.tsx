import { Fab, VStack } from "native-base";
import HomeTab from "../../tabs/HomeTab";
import SettingsTab from "../../tabs/Settings";
import { TabType } from "../types";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "react-native";

export const TABS: TabType[] = [
  {
    id: 1,
    name: "Home",
    component: HomeTab as React.FC,
    options: () => ({
      tabBarLabel: "Inicio",
      headerShown: false,
      headerBackground: (props) => {
        return (
          <VStack bg="#40C785" flex={1}>
            <StatusBar backgroundColor="#40C" barStyle="light-content" />
          </VStack>
        );
      },
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Icon name="road" size={20} color={focused ? "#40C785" : "grey"} />
      ),
    }),
  },
  {
    id: 1,
    name: "Settings",
    component: SettingsTab as React.FC,

    options: () => ({
      tabBarLabel: "Perfil",
      title: "Perfil",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
      },
      headerBackground: (props) => {
        return (
          <VStack bg="#40C785" flex={1}>
            <StatusBar backgroundColor="#40C785" barStyle="light-content" />
          </VStack>
        );
      },
      headerShown: true,
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Icon
          name="user-circle"
          size={20}
          color={focused ? "#40C785" : "grey"}
        />
      ),
    }),
  },
];
