import { Text } from "@chakra-ui/react";

export const Fallback = () => {
  return (
    <Text
      position="fixed"
      display="grid"
      placeItems="center"
      h="100vh"
      w="100vw"
      fontSize="3xl"
      fontWeight="700"
      color="teal.500"
    >
      Loading ...
    </Text>
  );
};
