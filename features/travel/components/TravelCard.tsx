import React from "react";
import {
  ArrowForwardIcon,
  Avatar,
  Button,
  Divider,
  HStack,
  IconButton,
  Skeleton,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { DocumentReference } from "firebase/firestore";

interface TravelCardProps {
  from?: string;
  to?: string;
  isSharingCost?: boolean;
  isPetFriendly?: boolean;
  carModel?: string;
  name?: string;
  date?: string;
  hourRange?: {
    from: string;
    to: string;
  };
  usercol?: DocumentReference<{
    name: string;
    carModel: string;
  }>;
}

const TravelCard = ({
  from = "Rio Cuarto",
  to = "Cordoba",
  isSharingCost = false,
  isPetFriendly = false,
  usercol,
  date = "30 de Marzo",
  hourRange = { from: "10:00", to: "12:00" },
}: TravelCardProps) => {
  const [userData, loading] = useDocumentDataOnce(usercol);

  const { colors } = useTheme();

  return (
    <Skeleton isLoaded={!loading && !!userData} h="48" rounded="2xl">
      <VStack bg="white" py="5" px="5" rounded="2xl" space={3}>
        <HStack alignItems="center">
          <Avatar
            bg="cyan.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          >
            TE
          </Avatar>
          <VStack ml="3">
            {userData && (
              <>
                <Text fontSize="md" fontWeight="semibold">
                  {userData?.name}
                </Text>
                <Text fontSize="xs" color="gray.400" fontWeight="semibold">
                  {userData?.carModel}
                </Text>
              </>
            )}
          </VStack>

          <Button rounded="full" py="1" bg="primary.500" ml="auto">
            Solicitar
          </Button>
        </HStack>

        <HStack alignItems="center">
          <VStack>
            <HStack alignItems="center" space={2}>
              <FontAwesome name="genderless" size={24} color="lightblue" />
              <Text fontSize="md" fontWeight="semibold">
                {from}
              </Text>
            </HStack>

            <HStack alignItems="center" space={2}>
              <Feather name="map-pin" size={14} color="green" />
              <Text fontSize="md" fontWeight="semibold">
                {to}
              </Text>
            </HStack>
          </VStack>

          <HStack
            alignSelf="flex-start"
            bg="primary.500"
            ml="auto"
            px="2"
            py="2"
            rounded="sm"
          >
            <MaterialCommunityIcons name="car-seat" size={24} color="white" />
            <Text color="white">3</Text>
          </HStack>
        </HStack>

        <HStack justifyContent="space-between">
          <HStack alignItems="center" space={2}>
            <FontAwesome5 name="calendar" size={14} color="black" />
            <Text fontSize="sm" fontWeight="semibold">
              {date}
            </Text>
          </HStack>

          <HStack alignItems="center" space={2}>
            <MaterialIcons name="access-time" size={14} color="black" />
            <Text fontSize="sm" fontWeight="semibold">
              {hourRange.from} - {hourRange.to}
            </Text>
          </HStack>
        </HStack>

        <Divider />

        <HStack justifyContent="space-evenly" alignItems="center">
          <VStack alignItems="center" flex="1">
            <MaterialIcons
              name="attach-money"
              size={24}
              color={isSharingCost ? colors.primary[500] : colors.gray[300]}
            />
          </VStack>

          <Divider orientation="vertical" />

          <VStack alignItems="center" flex="1">
            <MaterialIcons
              name="pets"
              size={24}
              color={isPetFriendly ? colors.primary[500] : colors.gray[300]}
            />
          </VStack>

          <Divider orientation="vertical" />

          <VStack alignItems="center" flex="1">
            <IconButton
              icon={
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={24}
                  color="black"
                />
              }
            />
          </VStack>
        </HStack>
      </VStack>
    </Skeleton>
  );
};

export default TravelCard;
