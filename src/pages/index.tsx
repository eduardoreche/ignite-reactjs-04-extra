import Head from 'next/head';
import { Text, Image, Flex, Stack, Box } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Categories } from '../components/Categories';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | World Trip</title>
      </Head>
      <Stack maxWidth={1440} mx="auto" w="100%" h="100vh">
        <Header />
        <Banner />
        <Categories />
      </Stack>
    </>
  );
}
