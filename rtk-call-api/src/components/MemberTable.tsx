import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useGetAllPostQuery } from "../services/post";
import { IPost } from "../services/type";

export const MemberTable = (props: TableProps) => {
  const { data, isFetching } = useGetAllPostQuery(null);
  console.log(data);
  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Title</Th>
          <Th>Body</Th>
        </Tr>
      </Thead>
      <Tbody>
        {!isFetching &&
          data.map((post: IPost) => (
            <Tr key={post.id}>
              <Td>
                <Text color="muted">{post.id}</Text>
              </Td>
              <Td>
                <Text color="muted">{post.title}</Text>
              </Td>
              <Td>
                <Text color="muted">{post.body}</Text>
              </Td>
              <Td>
                <HStack spacing="1">
                  <IconButton
                    icon={<FiTrash2 fontSize="1.25rem" />}
                    variant="ghost"
                    aria-label="Delete member"
                  />
                  <IconButton
                    icon={<FiEdit2 fontSize="1.25rem" />}
                    variant="ghost"
                    aria-label="Edit member"
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};
