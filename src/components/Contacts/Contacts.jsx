import React from "react";

import { useDispatch } from "react-redux";
import { addFilterAction } from "redux/filters/filters.slice";
import { Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ContactsList } from "components/ContactsList/ContactsList";
import { ModalStatus } from "redux/constant";
import { openModalAction } from "redux/phoneBook/phoneBook.slice";

export const Contacts = props => {
  const dispatch = useDispatch();

  const handleInput = event => {
    const {
      target: { value },
    } = event;
    dispatch(addFilterAction(value));
  };
  const handleModalAdd = () => {
    dispatch(openModalAction(ModalStatus.ADD_CONTACT));
  };

  return (
    <Box
      maxW="80%"
      m="0 auto"
      p="10px"
      boxShadow="base"
      rounded="md"
      position="relative"
    >
      <Button
        colorScheme="teal"
        size="lg"
        rightIcon={<AddIcon />}
        pos="absolute"
        top="20px"
        right="20px"
        onClick={handleModalAdd}
      >
        Add Contact
      </Button>
      <Heading as="h2" mb="5px">
        PhoneBook
      </Heading>
      <Text fontSize="md" fontWeight="700" mb="10px">
        Find contacts by name
      </Text>
      <Input
        focusBorderColor="#38B2AC"
        type="text"
        name="filter"
        onChange={handleInput}
        size="md"
        width="250px"
      />

      <ContactsList />
      <Text fontSize="xs" pt="10px">
        * to delete item just click on it
      </Text>
    </Box>
  );
};
