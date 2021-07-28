import Head from 'next/head';
import { Flex, Stack } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | World Trip</title>
      </Head>
      <Stack maxWidth={1440} mx="auto" w="100%" h="100vh">
        <Header />
        <Banner />
      </Stack>
    </>
  );
}
