import { NativeBaseProvider, Text } from "native-base";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Navigation from "./navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
