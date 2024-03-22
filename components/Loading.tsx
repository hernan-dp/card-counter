import React from "react";
import { ActivityIndicator } from "react-native";
import { Center } from "native-base";

const Loading = ({ testID = "" }) => {
  return (
    <Center flex={1} bg="transparent" testID={testID}>
      <ActivityIndicator color="#222329" />
    </Center>
  );
};

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
