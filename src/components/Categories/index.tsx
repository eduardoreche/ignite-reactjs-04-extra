import { Image, Stack, Text } from '@chakra-ui/react';

export function Categories() {
  return (
    <Stack direction="row" justify="space-between" px="24" py="24" gap="2">
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
    </Stack>
  );
}
