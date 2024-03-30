import { Pressable, Text, VStack } from "native-base";
import React from "react";

interface CalendarRowProps {
  day: string;
  date: number;
  active?: boolean;
  onPress?: () => void;
}

const DayButton = ({ date, day, active, onPress }: CalendarRowProps) => {
  return (
    <Pressable onPress={onPress}>
      <VStack
        bg={active ? "primary.500" : "gray.400"}
        px="5"
        alignItems="center"
        py="2"
        rounded="xl"
      >
        <Text color="white" fontSize="lg" fontWeight="bold">
          {date}
        </Text>
        <Text color="white" textAlign="center" fontSize="sm" fontWeight="light">
          {day}
        </Text>
      </VStack>
    </Pressable>
  );
};

export default DayButton;
