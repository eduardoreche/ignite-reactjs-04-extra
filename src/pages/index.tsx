import Head from 'next/head';
import { Text, Image, Flex, Stack, Box } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Categories } from '../components/Categories';
import { Carousel } from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | World Trip</title>
      </Head>
      <Stack maxWidth={1440} mx="auto" w="100%" h="100vh">
        <Header />
        <Banner
          title="5 Continentes, infinitas possibilidades"
          description="Chegou a hora de tirar do papel a viaggem qeu você sempre sonhou."
          backgroundImage="/images/banner-background.png"
          secondaryImage="/images/airplane.png"
        />
        <Categories />
        <Box p="10" align="center" justify="center">
          <Image src="/images/divider.png" alt="divider" />
        </Box>

        <Box p="10" align="center" justify="center">
          <Text fontSize="5xl">
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>
        </Box>

        <Box align="center" justify="center">
          <Carousel />
        </Box>
      </Stack>
    </>
  );
}
