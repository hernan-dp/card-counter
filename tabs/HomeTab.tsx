import { Flex, ScrollView, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Fab } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import TravelCard from "features/travel/components/TravelCard";
import Loading from "@components/Loading";
import CalendarRow from "@components/CalendarRow";

const HomeTab = () => {
  return (
    <ScrollView h="full" w="full" bg="#F0F4F7">
      <VStack py="5" px="5">
        <CalendarRow />
        <VStack space={5} mt="5">
          <TravelCard isPetFriendly />
          <TravelCard />
          <TravelCard isSharingCost />
        </VStack>
      </VStack>
      <Fab
        renderInPortal={true}
        shadow={2}
        bottom={20}
        bg="primary.500"
        size="sm"
        icon={<Icon color="white" name="plus" size={25} />}
      />
    </ScrollView>
  );
};

export default HomeTab;
