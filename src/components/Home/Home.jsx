import {
  Box,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Link,
} from "@chakra-ui/react";
import bg from "../../image/bg.jpg";
import {
  mainBoxStyle,
  mainTextStyle,
  mainTitleStyle,
  statsBoxStyle,
  statsStyle,
  titleStyle,
} from "./Home.chakraui";

export const Home = props => {
  return (
    <>
      <Box as="section" backgroundImage={bg} sx={mainBoxStyle}>
        <Box position="absolute" maxW="450px" right="10%" top="20%">
          <Heading as="h1" sx={mainTitleStyle}>
            Lorem, ipsum dolor.
          </Heading>
          <Text sx={mainTextStyle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            praesentium architecto odio deleniti, corporis nam exercitationem
            dolorem tempora odit? Mollitia fugit exercitationem omnis voluptates
            ex. Nisi odio minima asperiores unde!
          </Text>
        </Box>
        <Box sx={statsBoxStyle}>
          <Stat sx={statsStyle}>
            <StatLabel fontSize="3xl" fontWeight="700">
              Users
            </StatLabel>
            <StatNumber>1846</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              13.36%
            </StatHelpText>
          </Stat>
          <Stat sx={statsStyle}>
            <StatLabel fontSize="3xl" fontWeight="700">
              Contacts
            </StatLabel>
            <StatNumber>484948</StatNumber>
            <StatHelpText>
              <StatArrow type="desrease" />
              1.25%
            </StatHelpText>
          </Stat>
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
