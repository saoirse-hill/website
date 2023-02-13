import React, { FC } from "react";
import { Flex, Icon, Link } from "@chakra-ui/react"

interface ContactLinkProps {
  icon: any;
  link: string
  text: string;
}

const ContactLink: FC<ContactLinkProps> = ({ icon, link, text }) => {
  return (
    <Flex direction={'row'} justifyContent={'flex-start'} alignItems={'flex-end'}>
      <Icon as={icon} mr={'2'} mb={'0.5'}/>
      <Link variant={'underline-on-hover'} href={link}>
        {text}
      </Link>
    </Flex>
  );
};

export default ContactLink;
