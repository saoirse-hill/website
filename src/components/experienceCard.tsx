import React, { FC, ReactNode } from "react";
import { Card, CardBody, VStack, Grid, Heading, Text } from "@chakra-ui/react";

interface ExperienceCardProps {
  place: string;
  role: string;
  tenure: string;
  children: ReactNode;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ place, tenure, role, children }) => {
  return (
    <Card>
      <CardBody>
        <VStack alignItems={"flex-start"}>
          <Heading size="md">{place}</Heading>
          <Heading size="sm">{role}</Heading>
          <Heading size="sm">{tenure}</Heading>
          {children}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ExperienceCard;
