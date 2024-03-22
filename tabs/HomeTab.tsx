import { Text, VStack } from "native-base";
import React from "react";
import Loading from "../components/Loading";

const HomeTab = () => {
  return (
    <VStack h="full" w="full" bg="#F0F4F7">
      <Loading />
    </VStack>
  );
};

export default HomeTab;
