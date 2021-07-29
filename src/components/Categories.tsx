import { Box, Grid, Image, Stack, Text } from '@chakra-ui/react';

export function Categories() {
  return (
    <Grid templateColumns="repeat(5, 2fr)" gap={6} p={24}>
      <Stack align="center" justify="center">
        <Image src="/images/cocktail.png" alt="vida noturna" />
        <Text fontSize="2xl">vida norturna</Text>
      </Stack>

      <Stack align="center" justify="center" gap="1">
        <Image src="/images/surf.png" alt="praia" />
        <Text fontSize="2xl">praia</Text>
      </Stack>

      <Stack align="center" justify="center" gap="1">
        <Image src="/images/building.png" alt="moderno" />
        <Text fontSize="2xl">moderno</Text>
      </Stack>

      <Stack align="center" justify="center" gap="1">
        <Image src="/images/museum.png" alt="classico" />
        <Text fontSize="2xl">clássico</Text>
      </Stack>

      <Stack align="center" justify="center" gap="1">
        <Image src="/images/earth.png" alt="e mais..." />
        <Text fontSize="2xl">e mais...</Text>
      </Stack>
    </Grid>
  );
}
