import { Flex, Text, Icon, Button, Tooltip } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { ExternalLinkIcon, PhoneIcon, SettingsIcon } from "@chakra-ui/icons";
import { HomeIcon } from "image/icon/home";
import {
  flexStyle,
  iconStyle,
  logoStyle,
  menuBoxStyle,
  loggedOutIconStyle,
  tooltipStyle,
} from "./Layout.chakraui";

export const Layout = () => {
  return (
    <>
      <header>
        <Flex sx={menuBoxStyle}>
          <NavLink to="/">
            <Text sx={logoStyle}>
              <Text as="span" color="teal.400">
                Phone
              </Text>
              Book
            </Text>
          </NavLink>
          <Flex sx={flexStyle}>
            <NavLink to="/">
              <Icon as={HomeIcon} boxSize={6} sx={iconStyle} />
            </NavLink>

            <NavLink to="/contacts" onClick={e => e.preventDefault()}>
              <Tooltip
                hasArrow
                arrowSize={15}
                label="Contacts list is avaible to login users!"
                bg="teal.800"
                mt="10px"
              >
                <Icon as={PhoneIcon} boxSize={6} sx={loggedOutIconStyle} />
              </Tooltip>
            </NavLink>
            <NavLink to="/settings">
              <Tooltip
                hasArrow
                arrowSize={15}
                label="Settings list is avaible to login users!"
                bg="teal.800"
                mt="10px"
              >
                <Icon as={SettingsIcon} boxSize={6} sx={loggedOutIconStyle} />
              </Tooltip>
            </NavLink>
            <NavLink to="/login">
              <Button colorScheme="teal" rightIcon={<ExternalLinkIcon />}>
                Log in
              </Button>
            </NavLink>
          </Flex>
        </Flex>
      </header>
      <Outlet />
    </>
  );
};
