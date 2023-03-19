import { Center, Spinner } from "@chakra-ui/react";

export const CircleSpinner = ({ pt, dissmension }) => {
  return (
    <Center pt={`${pt}`}>
      <Spinner
        color="#2C7A7B"
        w={`${dissmension}`}
        h={`${dissmension}`}
        emptyColor="gray.200"
        thickness="10px"
        speed="1s"
      />
    </Center>
  );
};
