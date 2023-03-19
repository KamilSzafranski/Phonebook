import { Flex, Text, Icon, Button, Tooltip, Box } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { HomeIcon } from "image/icon/home";
import {
  flexStyle,
  iconStyle,
  logoStyle,
  menuBoxStyle,
  loggedOutIconStyle,
} from "./Layout.chakraui";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogin, selectUser } from "redux/selector";
import { logoutThunk } from "redux/auth/auth.thunk";
import { persistor } from "redux/store";
import { Suspense } from "react";

export const Layout = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const handleLogout = event => {
    event.preventDefault();
    persistor.pause();
    persistor.purge();
    dispatch(logoutThunk());
  };

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

            <NavLink to="/contacts">
              <Tooltip
                hasArrow
                arrowSize={15}
                label="Contacts list is avaible to login users!"
                bg="teal.800"
                mt="10px"
                visibility={isLogin === true ? "hidden" : "visible"}
              >
                <Icon
                  as={PhoneIcon}
                  boxSize={6}
                  sx={isLogin === true ? iconStyle : loggedOutIconStyle}
                />
              </Tooltip>
            </NavLink>
            {!isLogin && (
              <NavLink to="/login">
                <Button colorScheme="teal" rightIcon={<ExternalLinkIcon />}>
                  Log in
                </Button>
              </NavLink>
            )}
            {isLogin && (
              <Box display="flex" alignItems="center" gap="10px">
                <Text>{user?.email}</Text>
                <Tooltip
                  hasArrow
                  arrowSize={15}
                  label="Log out!"
                  bg="teal.800"
                  mt="10px"
                >
                  <Icon
                    as={ExternalLinkIcon}
                    _hover={{
                      color: "teal.400",
                    }}
                    onClick={handleLogout}
                  />
                </Tooltip>
              </Box>
            )}
          </Flex>
        </Flex>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
