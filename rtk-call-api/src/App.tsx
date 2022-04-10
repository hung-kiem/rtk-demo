import {
  Box,
  Container,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";
import { MemberTable } from "./components/MemberTable";

export const App = () => {
  return (
    <Container py={{ base: "4", md: "8" }} px={{ base: "0", md: 8 }}>
      <Box
        bg="bg-surface"
        boxShadow={{ base: "none", md: useColorModeValue("sm", "sm-dark") }}
        borderRadius={useBreakpointValue({ base: "none", md: "lg" })}
      >
        <Stack spacing="5">
          <Box px={{ base: "4", md: "6" }} pt="5">
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
            >
              <Text fontSize="lg" fontWeight="medium">
                Members
              </Text>
              <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup>
            </Stack>
          </Box>
          <Box overflowX="auto">
            <MemberTable />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
