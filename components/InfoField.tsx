import { Box, HStack, Text, VStack } from "native-base";
import React, { ReactElement } from "react";

type InfoFieldProps = {
  icon?: ReactElement;
  label?: string;
  value?: string;
};

const InfoField = ({ icon, label = "", value = "" }: InfoFieldProps) => {
  return (
    <HStack id="settings">
      <Box w="10" justifyContent="center" alignItems="center">
        {icon}
      </Box>
      <VStack>
        <Text color="gray.400" fontSize="sm">{label}</Text>
        <Text fontSize="md">{value}</Text>
      </VStack>
    </HStack>
  );
};

export default InfoField;
