import { useLocation, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  selectIsEditable,
  selectisLoding,
} from "redux/selector";
import { useEffect, useRef } from "react";

import { useMemo } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { ModalStatus } from "redux/constant";
import {
  setEditableAction,
  setIdToDeleteAction,
  openModalAction,
} from "redux/phoneBook/phoneBook.slice";
import { patchContact } from "redux/phoneBook/phoneBook.thunk";
import { NavLink } from "react-router-dom";

export const ContactDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const editable = useSelector(selectIsEditable);
  const isLoading = useSelector(selectisLoding);
  const allContacts = useSelector(selectContacts);
  const contact = useMemo(
    () => allContacts.filter(element => element.id === id),
    [allContacts]
  );
  const location = useLocation();
  const backLink = location?.state?.backLink ?? "/contacts";
  const nameRef = useRef();
  const numberRef = useRef();

  useEffect(() => {
    dispatch(setEditableAction(false));
  }, []);

  useEffect(() => {
    nameRef.current.value = contact[0]?.name ?? "";
    numberRef.current.value = contact[0]?.number ?? "";
  }, [contact, editable]);

  const handleEditable = event => {
    event.preventDefault();
    dispatch(setEditableAction(!editable));
  };

  const handlePostContact = e => {
    e.preventDefault();
    const { name, phone } = e.currentTarget.elements;
    const contact = {
      name: name.value,
      number: phone.value,
      id,
    };
    dispatch(patchContact(contact));
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(setIdToDeleteAction(id));
    dispatch(openModalAction(ModalStatus.DELETE_ALERT));
  };

  return (
    <>
      {isLoading && (
        <Center pt="150px">
          <Spinner
            thickness="10px"
            speed="1s"
            color="#2C7A7B"
            w="250px"
            h="250px"
            emptyColor="gray.200"
          />
        </Center>
      )}

      {!isLoading && (
        <Box display="grid" placeContent="center" pt="50px" position="relative">
          <Avatar
            src="https://bit.ly/broken-link"
            size="2xl"
            justifySelf="center"
            mb="20px"
          />
          <form onSubmit={handlePostContact}>
            <FormControl w="350px" mb="15px">
              <FormLabel htmlFor="email">Name</FormLabel>
              <Input
                id="name"
                name="name"
                ref={nameRef}
                focusBorderColor="teal.400"
                disabled={!editable}
                variant="filled"
              />
            </FormControl>
            <FormControl w="350px" mb="20px">
              <FormLabel htmlFor="password">Number</FormLabel>
              <Input
                type="number"
                id="phone"
                name="phone"
                ref={numberRef}
                disabled={!editable}
                variant="filled"
                focusBorderColor="teal.400"
              />
            </FormControl>

            <FormControl display="flex" justifyContent="center">
              <Button type="submit" colorScheme="teal" mr="15px">
                Change contact
              </Button>
              <Button type="button" colorScheme="red" onClick={handleDelete}>
                Delete contact
              </Button>
            </FormControl>
          </form>
          <Box position="absolute" top="10px" right="10px">
            <Button
              rightIcon={<EditIcon />}
              onClick={handleEditable}
              colorScheme="teal"
              mr="15px"
            >
              {editable && "Stop Edit"}
              {!editable && "Edit"}
            </Button>
            <NavLink to={backLink}>
              <Button colorScheme="teal">Go back</Button>
            </NavLink>
          </Box>
        </Box>
      )}
    </>
  );
};
