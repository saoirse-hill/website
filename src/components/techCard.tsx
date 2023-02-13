import React, { FC, ReactNode } from "react";
import { Card, CardBody, VStack, Heading, Text } from "@chakra-ui/react";

/* 
todo
add repo links (when available)
add install links (if applicable)
*/

interface TechCardProps {
  name: string;
  stack: string;
  children: ReactNode;
}

const TechCard: FC<TechCardProps> = ({ name, stack, children }) => {
  return (
    <Card>
      <CardBody>
        <VStack alignItems={"flex-start"}>
          <Heading size="md">{name}</Heading>
          <Heading size="sm">{stack}</Heading>
          {children}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default TechCard;
