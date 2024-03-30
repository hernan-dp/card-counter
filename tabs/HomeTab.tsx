import { Flex, Text, VStack } from "native-base";
import React from "react";
import { Fab } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { Example } from "@components/SwipeList";

const HomeTab = () => {
  return (
    <VStack h="full" w="full" bg="#F0F4F7" py="5" px="5"> 
      <Text fontSize={20} fontWeight="bold">Hola Hernan!</Text>
      <Flex>
        <Text>Viaje</Text>
      </Flex>
      <Example  />
      <Fab
        renderInPortal={false}
        shadow={2}
        colorScheme="success"
        size="sm"
        icon={<Icon color="white"  name="plus" size={25}/>}
      />
    </VStack>
  );
};

export default HomeTab;
