import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="100%" h="100px" align="center" justify="center">
      <Image src="/images/logo.png" alt="World Trip" w="186px" />
    </Flex>
  );
}
