import React, { FC } from "react";
import { Card, CardBody, VStack, Heading, Text } from "@chakra-ui/react";

/* 
todo
add cover images
*/

interface BookCardProps {
  title: string;
  author: string;
  review: string;
}

const BookCard: FC<BookCardProps> = ({ title, author, review }) => {
  return (
    <Card>
      <CardBody>
        <VStack alignItems={"flex-start"}>
          <Heading size="md">{title}</Heading>
          <Heading size="sm">{author}</Heading>
          <Text>{review}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default BookCard;
