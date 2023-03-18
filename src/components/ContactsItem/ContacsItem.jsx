import React from "react";
import PropTypes from "prop-types";
import { ListItem, Divider, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { listItemStyle } from "./ContactsItem.chakraui";
import { NavLink, useLocation } from "react-router-dom";

export const ContactsItem = ({ name, number, id, email }) => {
  const location = useLocation();

  return (
    <>
      <NavLink to={`${id}`} state={{ backLink: location }}>
        <ListItem sx={listItemStyle}>
          <Text>{name}:</Text>
          <Text> {number}</Text>
        </ListItem>
      </NavLink>
      <Divider mb="10px" borderColor="teal.400" />
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  email: PropTypes.string,
};
