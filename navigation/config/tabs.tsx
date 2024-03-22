import HomeTab from "../../tabs/HomeTab";
import SettingsTab from "../../tabs/Settings";
import { TabType } from "../types";
import Icon from "react-native-vector-icons/FontAwesome";

export const TABS: TabType[] = [
  {
    id: 1,
    name: "Home",
    component: HomeTab as React.FC,
    options: () => ({
      tabBarLabel: "Home",
      title: "",
      headerShown: false,
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Icon name="road" size={20} color={focused ? "black" : "grey"} />
      ),
    }),
  },
  {
    id: 1,
    name: "Settings",
    component: SettingsTab as React.FC,
    options: () => ({
      tabBarLabel: "Settings",
      title: "Settings",
      headerShown: false,
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Icon name="user-circle" size={20} color={focused ? "black" : "grey"} />
      ),
    }),
  },
];
