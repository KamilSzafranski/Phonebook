import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectFileredContacts, selectisLoding } from "redux/selector";
import { List } from "@chakra-ui/react";
import { ContactsItem } from "components/ContactsItem/ContacsItem";
import { ContactsListTitle } from "components/ContactsListTitle/ContactsListTitle";
import { listStyle } from "./ContactsList.chakraui";
import { CircleSpinner } from "components/CircleSpinner/CircleSpinner";

export const ContactsList = props => {
  const contacts = useSelector(selectFileredContacts);
  const isLoading = useSelector(selectisLoding);
  return (
    <>
      {isLoading && <CircleSpinner pt="50px" dissmension="250px" />}
      {!isLoading && (
        <>
          <ContactsListTitle />
          <List sx={listStyle}>
            {contacts.map(element => {
              return (
                <ContactsItem
                  key={element.id}
                  name={element.name}
                  number={element.number}
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
