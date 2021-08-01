import Head from 'next/head';
import { Box, Grid, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export default function Europe() {
  const cities = [
    {
      name: 'Londres',
      country: 'Reino Unido',
      flag: '🇬🇧',
      image: '/images/london2.jpg',
    },
    {
      name: 'Paris',
      country: 'França',
      flag: '🇫🇷',
      image: '/images/paris2.jpg',
    },
    { name: 'Roma', country: 'Itála', flag: '🇮🇹', image: '/images/rome.jpg' },
    {
      name: 'Praga',
      country: 'República Tcheca',
      flag: '🇨🇿',
      image: '/images/praga.jpg',
    },
    {
      name: 'Amsterdã',
      country: 'Holanda',
      flag: '🇳🇱',
      image: '/images/amsterdam.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Welcome | World Trip</title>
      </Head>
      <Stack maxWidth={1440} mx="auto" w="100%" h="100vh">
        <Header homeButton={true} />
        <Banner title="Europe" backgroundImage="/images/london.jpg" />
        <Stack direction="row" p="8">
          <Text w="60%" fontSize="3xl">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Grid
            justify="center"
            align="center"
            width="40%"
            templateColumns="repeat(3, 2fr)"
            gap={6}
            p={8}>
            <Box justify="center" align="center">
              <Heading fontSize="5xl" color="yellow.400">
                50
              </Heading>
              <Text>países</Text>
            </Box>
            <Box justify="center" align="center">
              <Heading fontSize="5xl" color="yellow.400">
                60
              </Heading>
              <Text>línguas</Text>
            </Box>
            <Box justify="center" align="center">
              <Heading fontSize="5xl" color="yellow.400">
                27
              </Heading>
              <Text>cidades +100</Text>
            </Box>
          </Grid>
        </Stack>

        <Heading fontSize="4xl">Cidades +100</Heading>

        <SimpleGrid
          flex="1"
          minChildWidth="256px"
          direction="row"
          justify="space-between"
          spacing={24}>
          {cities.map((city) => (
            <Stack
              width="256px"
              height="279px"
              direction="column"
              key={city.name}
              borderWidth="1px"
              borderColor="yellow.400"
              rounded={8}
              gap={24}
              pb={2}>
              <Box
                w="100%"
                rounded={8}
                height="173px"
                backgroundImage={city.image}
              />
              <Stack
                direction="row"
                align="center"
                justifyContent="space-between"
                p="4">
                <Box>
                  <Heading fontSize="2xl" pb={2}>
                    {city.name}
                  </Heading>

                  <Text color="gray.400">{city.country}</Text>
                </Box>
                <Text fontSize="2xl">{city.flag}</Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
