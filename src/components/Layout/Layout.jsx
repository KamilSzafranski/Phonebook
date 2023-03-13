import { Flex, Text, Icon, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon, PhoneIcon, SettingsIcon } from "@chakra-ui/icons";
import { HomeIcon } from "image/icon/home";
import { style } from "./Layout.chakraui";

export const Layout = () => {
  return (
    <header>
      <Flex sx={style}>
        <NavLink to="/">
          <Text
            _hover={{
              color: "teal.400",
            }}
          >
            <Text as="span" color="teal.400">
              Phone
            </Text>
            Book
          </Text>
        </NavLink>
        <Flex
          p="0"
          m="0"
          as="menu"
          gap="35px"
          fontSize="md"
          justifyContent="flex-start"
          alignItems="center"
        >
          <NavLink to="/">
            <Icon
              as={HomeIcon}
              boxSize={6}
              _hover={{
                color: "teal.400",
              }}
            />
          </NavLink>
          <NavLink to="/contacts">
            <Icon
              as={PhoneIcon}
              boxSize={6}
              _hover={{
                color: "teal.400",
              }}
            />
          </NavLink>
          <NavLink to="/settings">
            <Icon
              as={SettingsIcon}
              boxSize={6}
              _hover={{
                color: "teal.400",
              }}
            />
          </NavLink>
          <NavLink to="/login">
            <Button colorScheme="teal" rightIcon={<ExternalLinkIcon />}>
              Log in
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </header>
  );
};
