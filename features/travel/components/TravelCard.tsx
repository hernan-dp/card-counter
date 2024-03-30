import React from "react";
import { ArrowForwardIcon, HStack, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TravelCardProps {
  from?: string;
  to?: string;
  isSharingCost?: boolean;
  isPetFriendly?: boolean;
}

const TravelCard = ({
  from = "",
  to = "",
  isSharingCost = false,
  isPetFriendly = false,
}: TravelCardProps) => {
  return (
    <HStack bg="white" rounded="2xl" py="5" px="5">
      <VStack space={3} w="full">
        <HStack space={3} alignItems="center" w="full">
          <Text fontSize="lg" fontWeight="bold">
            Rio Cuarto
          </Text>
          <ArrowForwardIcon color="black" />
          <Text fontSize="lg" fontWeight="bold">
            Cordoba
          </Text>
        </HStack>

        <HStack space={3}>
          <Text color="gray.400" fontSize="md" fontWeight="semibold">
            30 Mar, 2018
          </Text>
          <Text color="gray.400" fontSize="md" fontWeight="semibold">
            10:30 - 11:00
          </Text>
        </HStack>

        <HStack space={3} alignItems="center" ml="auto">
          <FontAwesome5
            name="money-bill"
            size={24}
            color={isSharingCost ? "#40C785" : "gray"}
          />

          <MaterialIcons
            name="pets"
            size={24}
            color={isPetFriendly ? "#40C785" : "gray"}
          />
          <HStack
            alignSelf="flex-start"
            bg="#40C785"
            w="auto"
            px="2"
            py="2"
            rounded="xl"
          >
            <MaterialCommunityIcons name="car-seat" size={24} color="white" />
            <Text color="white">3</Text>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default TravelCard;
