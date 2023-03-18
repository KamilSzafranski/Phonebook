import React from "react";
import { Box, Avatar } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { gridBoxStyle } from "./ContactsListTitle.chakraui";

export const ContactsListTitle = props => {
  return (
    <Box sx={gridBoxStyle}>
      <Avatar src="https://bit.ly/broken-link" size="xs" />
      <PhoneIcon />
    </Box>
  );
};
