import React from "react";
import { ActivityIndicator } from "react-native";
import { Center, Text } from "native-base";
import LottieView from "lottie-react-native";

const Loading = ({ testID = "" }) => {
  return (
    <Center flex={1} bg="transparent" testID={testID}>
      <LottieView
        source={require("@assets/loading-animation.json")}
        colorFilters={[
          {
            keypath: "button",
            color: "#F00000",
          },
          {
            keypath: "Sending Loader",
            color: "#F00000",
          },
        ]}
        style={{ width: "100%", height: "30%" }}
        autoPlay
        loop
      />
    </Center>
  );
};

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
