import { Box, Text, Link, List, Image } from "@chakra-ui/react";

import { mainBoxStyle, mainTextStyle, mainTitleStyle } from "./Home.chakraui";
import { TypeItem } from "components/TypeItem/TypeItem";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import add from "../../image/add.png";
import edit from "../../image/edit.png";
import del from "../../image/delete.png";
import people from "../../image/people.png";
import squircle from "../../image/squircle.svg";

const Home = props => {
  return (
    <>
      <Box as="section" bg="gray.700">
        <Box sx={mainBoxStyle} m="0 auto" maxW="1600px" position="relative">
          <Image
            src={people}
            alt="Phone with phonebook"
            position="absolute"
            top="50px"
            right="50px"
            width="300px"
            height="300px"
            sx={{
              maskImage: `url(${squircle})`,
            }}
          />
          <Box maxWidth="350px">
            <Text sx={mainTitleStyle}> Lorem Ipsum</Text>
            <Text sx={mainTextStyle} color="teal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box as="section" bg="gray.100">
        <Box m="0 auto" maxW="1600px">
          <List display="flex" justifyContent="center" gap="30px" p="10px 25px">
            <TypeItem
              iconType={AddIcon}
              photoType={add}
              altType="add file photo"
            />
            <TypeItem
              iconType={EditIcon}
              photoType={edit}
              altType="delete file photo"
            />
            <TypeItem
              iconType={DeleteIcon}
              photoType={del}
              altType="update file photo"
            />
          </List>
        </Box>
      </Box>
      <Box
        as="footer"
        bg="gray.700"
        color="white"
        p="20px 0"
        textAlign="center"
      >
        © 2022 | All Rights Reserved Developed with &#128154; by{" "}
        <Link href="https://github.com/KamilSzafranski">Szafir</Link>
      </Box>
    </>
  );
};

export default Home;
