import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectUser } from "redux/selector";
import { color } from "framer-motion";

export const ContactDetail = () => {
  const { id } = useParams();
  const user = useSelector(selectUser);

  return (
    <Box display="grid" placeContent="center" pt="50px">
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
            placeholder={user.name}
            _placeholder={{
              fontWeight: 700,
            }}
          />
        </FormControl>
        <FormControl w="350px" mb="20px">
          <FormLabel htmlFor="password">Email</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
            disabled
            _placeholder={{
              fontWeight: 700,
            }}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl display="flex" justifyContent="center">
          <Button type="submit" colorScheme="teal">
            Change contact
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
