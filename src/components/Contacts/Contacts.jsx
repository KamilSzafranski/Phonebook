import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useLocation, useSearchParams } from "react-router-dom";
import { selectFilters, selectIsRefresh } from "redux/selector";

export const Contacts = props => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = useSelector(selectFilters);

  const refresh = useSelector(selectIsRefresh);

  useEffect(() => {
    refresh === true
      ? setSearchParams()
      : dispatch(addFilterAction(searchParams.get("filter") ?? ""));
  }, [dispatch, setSearchParams, addFilterAction, searchParams]);

  const handleInput = event => {
    const {
      target: { value },
    } = event;
    setSearchParams({ filter: value });
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
        value={filter}
        focusBorderColor="teal.400"
      />

      <ContactsList />
      <Text fontSize="xs" pt="10px">
        * to delete item just click on it
      </Text>
    </Box>
  );
};
