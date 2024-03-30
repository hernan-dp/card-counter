import { NativeBaseProvider, Text } from "native-base";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Navigation from "./navigation";
import customTheme from "theme";

require('dayjs/locale/es')

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
