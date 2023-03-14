import React from "react";

import { useDispatch } from "react-redux";
import { addFilterAction } from "redux/filters/filters.slice";
import { Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ContactsList } from "components/ContactsList/ContactsList";
import { ModalStatus } from "redux/constant";
import { openModalAction } from "redux/phoneBook/phoneBook.slice";
import {
  boxStyle,
  buttonAddContactStyle,
  filterInputStyle,
} from "./Contact.chakraui";

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
    <Box sx={boxStyle}>
      <Button
        colorScheme="teal"
        onClick={handleModalAdd}
        sx={buttonAddContactStyle}
        rightIcon={<AddIcon />}
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
        sx={filterInputStyle}
        onChange={handleInput}
        focusBorderColor="teal.400"
      />

      <ContactsList />
      <Text fontSize="xs" pt="10px">
        * to delete item just click on it
      </Text>
    </Box>
  );
};
