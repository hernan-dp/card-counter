import InfoField from "@components/InfoField";
import Loading from "@components/Loading";
import ProfilePictureBlock from "features/profile/components/ProfilePictureBlock";
import { db } from "firebase";
import { DocumentReference, doc } from "firebase/firestore";
import { Divider, HStack, ScrollView, Text, VStack } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  useDocumentData,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";

const userId = "M56ejlJNCcJ9F3PZPgJK";
const userRef = doc(db, "user", userId) as DocumentReference<{
  name: string;
  carModel: string;
}>;

const SettingsTab = () => {
  const [data, loading, error] = useDocumentData(userRef);

  if (loading || !data) return <Loading />;

  return (
    <ScrollView h="full" w="full" bg="#F0F4F7">
      <ProfilePictureBlock name={data.name} />
      <VStack space={2} p={3}>
        <InfoField
          label="Email"
          value="h.de.prada1@gmail.com"
          icon={<MaterialIcons name="email" size={24} color="gray" />}
        />
        <Divider />
        <InfoField
          label="Telefono"
          value="+3517894880"
          icon={<FontAwesome name="mobile-phone" size={30} color="gray" />}
        />
        <Divider />
      </VStack>
    </ScrollView>
  );
};

export default SettingsTab;
