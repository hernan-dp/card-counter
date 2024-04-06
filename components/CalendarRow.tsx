import { HStack, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import DayButton from "./DayButton";
import dayjs from "dayjs";

const today = dayjs();

const generateWeek = () => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    const newDay = today.add(i, "day");
    week.push(newDay);
  }
  return week;
};

const week = generateWeek();

const CalendarRow = () => {
  const [activeDay, setActiveDay] = useState(today.date());

  return (
    <ScrollView horizontal>
      <HStack space={2} mr="5">
        {week.map((day) => {
          return (
            <DayButton
              key={day.date()}
              day={day.locale("es").format("ddd").toLocaleUpperCase()}
              date={day.date()}
              active={day.date() === activeDay}
              onPress={() => setActiveDay(day.date())}
            />
          );
        })}
      </HStack>
    </ScrollView>
  );
};

export default CalendarRow;
