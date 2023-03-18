import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectModal } from "redux/selector";
import { addContacts } from "redux/phoneBook/phoneBook.thunk";
import { ModalStatus } from "redux/constant";
import { closeModalAction } from "redux/phoneBook/phoneBook.slice";
import {
  phoneInputStyle,
  nameInputStyle,
  emailInputStyle,
} from "./AddContactModal.chakraui";

export const AddContactModal = props => {
  const toast = useToast();
  const initialRef = useRef();
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const modal = useSelector(selectModal);

  const handleCloseModal = () => dispatch(closeModalAction());

  const handleAdd = event => {
    event.preventDefault();
    const {
      name: { value: text },
      number: { value: num },
    } = event.currentTarget.elements;

    const nameTaken = contact.some(elements => elements.name === text);
    const numberTaken = contact.some(elements => elements.number === num);

    if (nameTaken && numberTaken) {
      return toast({
        title: "Warning",
        description: ` Contact ${text} is alredy in Phonebook`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
    dispatch(addContacts({ text, num }));
  };

  return (
    <Modal
      isOpen={modal === ModalStatus.ADD_CONTACT}
      onClose={handleCloseModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>AddContact</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleAdd} id="formId">
            <FormControl>
              <FormLabel htmlFor="Name">First name</FormLabel>
              <Input
                id="name"
                name="name"
                sx={nameInputStyle}
                ref={initialRef}
              />
              <FormLabel htmlFor="number">Phone</FormLabel>
              <Input
                id="number"
                type="tel"
                name="number"
                sx={phoneInputStyle}
              />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit" form="formId">
            Submit
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
