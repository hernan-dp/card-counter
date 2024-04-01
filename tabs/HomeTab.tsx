import { Flex, ScrollView, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Fab } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import TravelCard from "features/travel/components/TravelCard";
import {
  useCollection,
  useCollectionData,
  useDocumentDataOnce,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";
import CalendarRow from "@components/CalendarRow";
import { doc } from "firebase/firestore";
import { db } from "firebase";
import Loading from "@components/Loading";

const docRef = doc(db, "travels", "nqJwIN92wfjE8MpuIk47");
const HomeTab = () => {
  const [value, loading, error] = useDocumentDataOnce(docRef);

  console.log({ loading });

  if (loading) return <Loading />;

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
