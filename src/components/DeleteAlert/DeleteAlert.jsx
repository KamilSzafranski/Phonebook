import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteContacts } from "redux/phoneBook/phoneBook.thunk";
import { selectIdToDelete, selectModal } from "redux/selector";
import { ModalStatus } from "redux/constant";
import { closeModalAction } from "redux/phoneBook/phoneBook.slice";
import { useNavigate } from "react-router-dom";
import { addFilterAction } from "redux/filters/filters.slice";

const DeleteAlert = props => {
  const cancelRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modal = useSelector(selectModal);
  const id = useSelector(selectIdToDelete);
  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteContacts(id));
    dispatch(addFilterAction(""));
    navigate("/contacts");
  };

  const handleClose = () => dispatch(closeModalAction());

  return (
    <AlertDialog
      isOpen={modal === ModalStatus.DELETE_ALERT}
      leastDestructiveRef={cancelRef}
      onClose={handleClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Contact
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteAlert;
