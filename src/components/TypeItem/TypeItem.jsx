import { Icon, Image, ListItem, Text } from "@chakra-ui/react";

export const TypeItem = ({ iconType, photoType, altType }) => {
  return (
    <ListItem
      flexBasis="200px"
      bg="teal.700"
      p="25px 15px"
      rounded="lg"
      color="white"
    >
      <Image
        src={photoType}
        alt={`${altType}`}
        display="block"
        m="0 auto"
        mb="25px"
        width="75px"
        height="75px"
        borderRadius="50%"
      />
      <Text mb="15px" fontSize="xl" fontWeight="700" textAlign="center">
        LOREM IPSUM
      </Text>
      <Text textAlign="justify" mb="25px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
      </Text>
      <Icon as={iconType} boxSize={6} m="0 auto" display="block" />
    </ListItem>
  );
};
