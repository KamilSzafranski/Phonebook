import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  Checkbox,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

import phonnebook from "../../image/phonebook.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";
import { selectAuthPending, selectIsLogin } from "redux/selector";
import { useCallback, useEffect } from "react";
import { persistor } from "redux/store";

const Login = () => {
  const dispatch = useDispatch();
  const pending = useSelector(selectAuthPending);
  const navigate = useNavigate();

  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    if (isLogin) navigate("/contacts");
  }, [isLogin, navigate]);

  const handleLogin = event => {
    event.preventDefault();

    const { email, password, remember } = event.currentTarget;
    const user = {
      email: email.value,
      password: password.value,
    };
    remember.checked && persistor.persist();

    if (!remember.checked) {
      persistor.pause();
      persistor.purge();
    }

    dispatch(loginThunk(user));
  };

  const handleDemo = () => {
    persistor.pause();
    persistor.purge();
    dispatch(
      loginThunk({
        email: "Phonebook@phone.pl",
        password: "Test123!",
      })
    );
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
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <FormControl w="350px" mb="15px">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            focusBorderColor="teal.400"
            required
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
            required
          />
        </FormControl>
        <FormControl
          mb="15px"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Checkbox colorScheme="teal" name="remember">
            Rememver me
          </Checkbox>
          <NavLink to="/register">
            <Text
              fontSize="xs"
              _hover={{
                color: "teal.400",
              }}
            >
              I dont`t have alredy account :(
            </Text>
          </NavLink>
        </FormControl>
        <Text
          onClick={handleDemo}
          fontSize="xs"
          textAlign="center"
          mb="8px"
          cursor="pointer"
          _hover={{
            color: "teal.400",
          }}
        >
          Try demo
        </Text>
        <FormControl display="flex" justifyContent="center">
          <Button
            type="submit"
            colorScheme="teal"
            isLoading={pending}
            loadingText="Submitting"
          >
            Submit
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

export default Login;
