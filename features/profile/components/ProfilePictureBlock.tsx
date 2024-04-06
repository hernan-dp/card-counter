import React from "react";
import { Avatar, Text, VStack } from "native-base";

const photoUrl =
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const ProfilePictureBlock = ({ name = "", photoUri = photoUrl }) => {
  return (
    <VStack
      id="user-block"
      bg="primary.500"
      roundedBottom="2xl"
      justifyContent="center"
      alignItems="center"
      pb="5"
      space="2"
    >
      <Avatar
        bg="cyan.500"
        size="xl"
        source={{
          uri: photoUri,
        }}
      >
        TE
      </Avatar>
      <Text color="white" fontSize="xl">
        {name}
      </Text>
    </VStack>
  );
};

export default ProfilePictureBlock;
