import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Container,
  Flex,
  HStack,
  VStack,
  Center,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Divider,
  Link,
  RadioGroup,
  Radio,
  useColorMode,
  useColorModeValue,
  Wrap,
  Heading,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

import {
  ContactLink,
  BookCard,
  ExperienceCard,
  ScrollToTopFAB,
} from "@/components";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const accent = useColorModeValue(
    "linear(to-l, pink.500, purple.400)",
    "linear(to-l, pink.300, purple.200)"
  );

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // i'll break this up into different pages eventually, promise 🤞🏼
  return (
    <>
      <Head>
        <title>hi im saoirse :)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌈</text></svg>"
        />
      </Head>
      <Container maxW={"container.md"} pt={"8"} py="14" overflowX={"hidden"}>
        <VStack spacing={"8"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Text mr={{ base: "0", md: "8" }} mb={{ base: "8", md: "0" }}>
              hello my name is{" "}
              <Text as="b" bgGradient={accent} bgClip="text">
                saoirse<Text as="sup">(she/her)</Text>
              </Text>{" "}
              and this is my digital space. useful things may or may not end up
              here but you're welcome to stick around or just leave and fly a kite or
              something.
            </Text>
            <Center minW={"48"}>
              <Wrap
                spacing={{ base: "4", md: "0" }}
                justify={{ base: "center", md: "flex-start" }}
              >
                <ContactLink
                  icon={AiFillGithub}
                  link="https://github.com/saoirse-hill"
                  text="saoirse-hill"
                />
                <ContactLink
                  icon={BsCodeSlash}
                  link="https://github.com/saoirse-hill/website"
                  text="website src code"
                />
                <ContactLink
                  icon={AiFillLinkedin}
                  link="https://www.linkedin.com/in/saoirse-hill/"
                  text="linkedin"
                />
              </Wrap>
            </Center>
          </Flex>
          <Tabs
            variant="soft-rounded"
            colorScheme="pink"
            defaultIndex={0}
            width="100%"
            alignItems={"center"}
          >
            <TabList>
              <Wrap justify={"center"}>
                <Tab>me</Tab>
                <Tab>career</Tab>
                <Tab>books</Tab>
                <Tab>settings</Tab>
              </Wrap>
            </TabList>

            <TabPanels>
              <TabPanel px={"0"}>
                <VStack spacing={"8"} pt={"4"}>
                  <Text>
                    my name is pronounced sur · shuh. if you like downton abbey
                    and/or care about royal weddings you can also pronounce it
                    seeuh · shuh.{" "}
                    <Link
                      href="https://www.google.com/search?client=firefox-b-1-d&q=saoirse+pronunciation"
                      variant={"always-underline"}
                    >
                      here are the sound bites if you need more help.
                    </Link>
                  </Text>
                  <Text>
                    i'm a software engineer who has mainly done full stack web
                    dev with js. my aspirations are focused on team leadership,
                    product design and project ownership. i dont see myself in
                    an application dev role forever but i still like it for now,
                    ideally i will pivot into a product/ui/ux designer 😊
                  </Text>
                  <Text>
                    i'm passionate about how car-based infrastructure is the
                    worst thing to ever happen and it actively makes your life
                    worse. i have sources. i want you to ask about this so you
                    can be mad with me. misery loves company.
                  </Text>
                  <Text>
                    love island uk is my guily pleasure. i just love all the
                    dumb slang they use like "im chuffed" and "mugged off". yes
                    im aware its toxic. yes im aware its{" "}
                    <Link
                      href="https://www.verywellmind.com/what-is-heteronormativity-5191883"
                      variant={"always-underline"}
                    >
                      heteronormative
                    </Link>
                    . we all have our vices. 🤷🏼‍♀️
                  </Text>
                  <Text>
                    i'm a big fan of reading. i try to read a bunch. i
                    particularly like speculative fiction, gothic, horror and
                    queer stories.
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel px={"0"}>
                <VStack
                  w={"100%"}
                  spacing={"8"}
                  pt={"4"}
                  alignItems={"flex-start"}
                >
                  <Heading size={"lg"}>where i want to be</Heading>
                  <Text>
                    <Text as="b">tech space: </Text>my comfort zone is full
                    stack web development with js/ts but i'm flexbile and
                    willing to pivot. before my job at blueprint i didnt know
                    any js/ts or how to make a website and i picked it up
                    quickly. <Text as="i">however, </Text>i rather have a role
                    in product/ui/ux design than in implementation. ideally i
                    would still use this tech stack, but mainly to prototype
                    interfaces after ive mocked them up in figma.
                  </Text>
                  <Text>
                    <Text as="b">role: </Text>so far ive mainly been an
                    individual contributor in application development but thats
                    not what i want to do forever. the thing i enjoy more than
                    anything else is collaborating with others, technical and
                    non-technical. I dream of working on cross-functional teams,
                    interfacing with different departments, synthesizing
                    information, collaborating on features and advocating for
                    both our users and team members. so my ideal role is
                    whatever role allows me to do that. i think the happiest
                    version of myself can check all these boxes and thrive as a
                    product designer (or someone who works closely with one)
                  </Text>
                  <Text>
                    <Text as="b">company: </Text>so far ive been at both ends of
                    the spectrum size-wise. at blueprint the engineering team
                    was about 6 people and i worked with around 10 on a weekly
                    basis. overall, the whole company was around 30 people. then
                    i worked at amazon which is one of the largest corpations on
                    the planet. i think something on the smaller size is right
                    for me but i care more about the mission than anything else.
                    i'd love to work niche tech, healthcare, or something
                    serving marginalized communities.
                  </Text>
                  <Heading size={"lg"}>work history</Heading>
                  <ExperienceCard
                    place="amazon"
                    role="software development engineer"
                    tenure="oct 2022 - mar 2023 (laid off)"
                  >
                    <Text>
                      i wasnt here for very long but i still managed to get a
                      lot done. pretty much exclusively worked with java and
                      spring making/extending/maintaing applications (full stack
                      role). day to day work was focused on small, metric driven
                      tasks. got a lot of experience figuring out complex tech
                      stacks and workflows without much (if any) documentation.
                    </Text>
                  </ExperienceCard>
                  <ExperienceCard
                    place="blueprint"
                    role="software engineer"
                    tenure="jan 2019 - sep 2022 (left for amazon)"
                  >
                    <Text>
                      tiny seed stage startup. very tight knit engineering team
                      that worked with other departments closely, especially the
                      design team and the customer support team. huge emphasis
                      on project/feature ownership. typical feature lifecycle
                      breakdown: design, implement and code review as
                      individuals or pairs. design review and test as a team.
                      tech stack was almost entirely javascript and typescript.
                      the bulk of the engineering work involved a postgresql
                      server, 2 node servers, 2 react apps, a react native
                      mobile app, and a couple of microservices (typically
                      involving aws lambda). we used aws daily, especially
                      lambda. i was offically part time until i graduated
                      college but nevertheless i made significant contributions
                      during that time
                    </Text>
                  </ExperienceCard>
                  <Heading size="lg">education</Heading>
                  <ExperienceCard
                    place="university of central florida"
                    role="student, graduated with b.s. in comp sci"
                    tenure="aug 2016 - dec 2020"
                  >
                    <Text>
                      orignally started as an aerospace engineering major but
                      became disenchanted with the idea of calculating stress
                      forces on wings and making missiles. plus i had a lot of
                      fun messing with python so i switched to computer science.
                      that being said, rocket science and space are both rad as
                      heck and i've explored working at blue origin and spacex
                    </Text>
                  </ExperienceCard>
                  <Divider />
                  <Text>
                    <Text>
                      if you would like an actual 1 page resume just email me
                      for the latest copy. its mostly the same information but
                      with capitalization, metrics and a pretty font :)
                    </Text>
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel px={"0"}>
                <VStack spacing={"8"} pt={"4"}>
                  <Text>
                    i was going to use the good reads api for this{" "}
                    <Link
                      variant="always-underline"
                      href="https://help.goodreads.com/s/article/Does-Goodreads-support-the-use-of-APIs"
                    >
                      but its been deprecated.
                    </Link>{" "}
                    i guess the gold mine of book-cataloging-based social media
                    dried up. <Text as="i">shocker.</Text> (i kid i would
                    totally make this if it didnt already exist) so this will
                    just be a hand picked list of books that i like and value
                  </Text>
                  <Divider />
                  <BookCard
                    title="plain bad heroines"
                    author="emily m danforth"
                    review="gothic queer fiction. its a real book about the haunted production of a
                    fictional movie based on a fictional non-fiction book about
                    fictional tragic events involving a fictionally cursed but
                    actually real book. just trust me. involves girls kissing.
                    👩‍👩‍👧"
                  />
                  <BookCard
                    title="bunny"
                    author="mona awad"
                    review="semi horror fiction. absolutely divine. this book made me feel
                    claustrophobic. i needed to actually stop and do a breathing
                    excercise. you know that feeling when you've had too much to
                    drink and youre looking at yourself in the mirror in the
                    bathroom and you start to dissociate a bit and think 'oh god oh fuck help me?' this
                    book is that."
                  />
                  <BookCard
                    title="never let me go"
                    author="kazou ishiguro"
                    review="speculative fiction. this book feels like youre by an eldery persons bedside 
                    listening to them aimlessly romp around their memories with little rhyme or reason and
                    these memories make you increasingly uncomfortable. dont look up anything about this
                    book before reading it, trust me."
                  />
                  <BookCard
                    title="nevada"
                    author="imogen binnie"
                    review="queer fiction thats basically a little trans slice of life. has multiple POVs 
                    of different people at different stages of transition. its grounded and relatable and 
                    funny and made by/for trans ppl."
                  />
                  <Divider />
                  <Text>
                    shop local! find an indie book store near you{" "}
                    <Link
                      variant="always-underline"
                      href="https://www.indiebound.org/indie-store-finder"
                    >
                      here
                    </Link>
                  </Text>
                </VStack>
              </TabPanel>
              <TabPanel px={"0"}>
                <VStack spacing={"8"} pt={"4"} align="flex-start">
                  <RadioGroup
                    onChange={toggleColorMode}
                    value={colorMode}
                    colorScheme="pink"
                  >
                    <HStack spacing={"4"}>
                      <Text as="b">color mode: </Text>
                      <Radio value="light">light</Radio>
                      <Radio value="dark">dark</Radio>
                    </HStack>
                  </RadioGroup>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
        <ScrollToTopFAB isVisible={showScrollToTop} />
      </Container>
    </>
  );
}
