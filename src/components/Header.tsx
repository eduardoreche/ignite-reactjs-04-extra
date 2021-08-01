import { Image, Flex, Box } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="100%" h="100px" p={8} align="center" justify="center">
      <Box>
        <Image src="/images/logo.png" alt="World Trip" w="186px" />
      </Box>
    </Flex>
  );
}
