import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";

import phonnebook from "../../image/phonebook.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "redux/auth/auth.thunk";
import { selectIsLogin } from "redux/selector";
import { useEffect } from "react";
import { selectAuthPending } from "redux/selector";

export const Register = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const navigate = useNavigate();
  const pending = useSelector(selectAuthPending);

  useEffect(() => {
    if (isLogin) navigate("/contacts");
  }, [isLogin, navigate]);

  const handleRegister = event => {
    event.preventDefault();

    const { name, email, password } = event.currentTarget.elements;

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(registerThunk(user));
  };

  return (
    <Box
      bg="gray.700"
      h="100vh"
      display="grid"
      justifyItems="center"
      gap="30px"
      color="white"
    >
      <Heading as="h2" color="white" alignSelf="end">
        Registration
      </Heading>
      <form onSubmit={handleRegister}>
        <FormControl w="350px" mb="15px">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            name="name"
            type="name"
            focusBorderColor="teal.400"
          />
        </FormControl>
        <FormControl w="350px" mb="15px">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            focusBorderColor="teal.400"
          />
        </FormControl>
        <FormControl w="350px" mb="20px">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            focusBorderColor="teal.400"
            minLength="7"
          />
        </FormControl>
        <FormControl display="flex" justifyContent="center">
          <Button
            type="submit"
            colorScheme="teal"
            isLoading={pending}
            loadingText="In progress"
          >
            Register
          </Button>
        </FormControl>
      </form>
      <Image
        src={phonnebook}
        position="absolute"
        left="0"
        bottom="0"
        borderRadius="5px"
        sx={{
          clipPath:
            "polygon(0% 0%, 65.7% 0.5%, 99.9% 58.5%, 100% 100%, 76.2% 100%, 0% 100%, 0% 85%, 0% 15%)",
        }}
      />
    </Box>
  );
};
