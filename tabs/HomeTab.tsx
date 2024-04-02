import { ScrollView, VStack } from "native-base";
import React, { useMemo } from "react";
import { Fab } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import TravelCard from "features/travel/components/TravelCard";
import {
  useCollectionData,
  useCollectionDataOnce,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import CalendarRow from "@components/CalendarRow";
import {
  CollectionReference,
  DocumentReference,
  Timestamp,
  collection,
} from "firebase/firestore";
import { db } from "firebase";
import Loading from "@components/Loading";
import dayjs from "dayjs";

type Travel = {
  creator: DocumentReference<{
    name: string;
    carModel: string;
  }>;
  departure: {
    end: Timestamp;
    start: Timestamp;
  };
  travel: {
    from: string;
    to: string;
  };
  isPetFriendly: boolean;
  isSharingCost: boolean;
};

const transformDate = ({
  end,
  start,
}: {
  end: Timestamp;
  start: Timestamp;
}) => {
  const startDate = dayjs(start.toDate()).locale("es").format("HH:mm");
  const endDate = dayjs(end.toDate()).locale("es").format("HH:mm");

  return {
    start: startDate,
    end: endDate,
  };
};

const query = collection(db, "travels") as CollectionReference<Travel>;
const HomeTab = () => {
  const [travels, loading, error] = useCollectionDataOnce(query);

  if (loading || !travels) return <Loading />;

  return (
    <ScrollView h="full" w="full" bg="#F0F4F7">
      <VStack py="5" px="5">
        <CalendarRow />
        <VStack space={5} mt="5">
          {travels.map((travel, index) => {
            const departureDate = transformDate(travel.departure);
            const departureDay = dayjs(travel.departure.start.toDate()).locale('es').format(
              "DD [de] MMMM"
            );

            return (
              <TravelCard
                key={index}
                isSharingCost={travel.isSharingCost}
                isPetFriendly={travel.isPetFriendly}
                from={travel.travel.from}
                to={travel.travel.to}
                hourRange={{
                  from: departureDate.start,
                  to: departureDate.end,
                }}
                date={departureDay}
                usercol={travel.creator}
              />
            );
          })}
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
