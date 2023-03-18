import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectIsRefresh } from "redux/selector";
import { useEffect } from "react";

import { useMemo } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";

export const ContactDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  const allContacts = useSelector(selectContacts);
  const contact = useMemo(
    () => allContacts.filter(element => element.id === id),
    [allContacts]
  );

  useEffect(() => {
    if (!isRefresh) dispatch(fetchContacts());
  }, [isRefresh]);

  return (
    <Box display="grid" placeContent="center" pt="50px" position="relative">
      <Avatar
        src="https://bit.ly/broken-link"
        size="2xl"
        justifySelf="center"
        mb="20px"
      />
      <form>
        <FormControl w="350px" mb="15px">
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input
            id="name"
            name="name"
            focusBorderColor="teal.400"
            disabled
            placeholder={contact[0]?.name}
            _placeholder={{
              fontWeight: 700,
              color: "black",
            }}
            variant="filled"
          />
        </FormControl>
        <FormControl w="350px" mb="20px">
          <FormLabel htmlFor="password">Email</FormLabel>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder={contact[0]?.number}
            disabled
            _placeholder={{
              fontWeight: 700,
              color: "black",
            }}
            variant="filled"
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl display="flex" justifyContent="center">
          <Button type="submit" colorScheme="teal">
            Change contact
          </Button>
        </FormControl>
      </form>
      <Box position="absolute" top="10px" right="10px">
        <Button rightIcon={<EditIcon />} colorScheme="teal" mr="15px">
          Edit
        </Button>
        <Button colorScheme="teal">Go back</Button>
      </Box>
    </Box>
  );
};
