import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectFileredContacts, selectisLoding } from "redux/selector";
import { Center, List, Spinner } from "@chakra-ui/react";
import { ContactsItem } from "components/ContactsItem/ContacsItem";
import { ContactsListTitle } from "components/ContactsListTitle/ContactsListTitle";
import { listStyle, spinnerStyle } from "./ContactsList.chakraui";

export const ContactsList = props => {
  const contacts = useSelector(selectFileredContacts);
  const isLoading = useSelector(selectisLoding);
  return (
    <>
      {isLoading && (
        <Center pt="50px">
          <Spinner sx={spinnerStyle} thickness="10px" speed="1s" />
        </Center>
      )}
      {!isLoading && (
        <>
          <ContactsListTitle />
          <List sx={listStyle}>
            {contacts.map(element => {
              return (
                <ContactsItem
                  key={element.id}
                  name={element.name}
                  number={element.phone}
                  email={element.email}
                  id={element.id}
                />
              );
            })}
          </List>
        </>
      )}
    </>
  );
};
