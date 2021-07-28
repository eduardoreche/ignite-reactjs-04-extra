import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  VStack,
  Stack,
} from '@chakra-ui/react';

export function Banner() {
  return (
    <Box
      w="100%"
      bgImage="/images/banner-background.png"
      bgPosition="start"
      bgRepeat="no-repeat">
      <Flex justifyContent="space-around" align="start">
        <Stack pt="24" w="30%" gap="4" justify="start" align="start">
          <Text fontSize="4xl" color="white">
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text color="white" fontSize="lg">
            Chegou a hora de tirar do papoel a viagem que você sempre sonhou.
            adfasfas
          </Text>
        </Stack>

        <Box mt="20">
          <Image src="/images/airplane.png" alt="Airplane" />
        </Box>
      </Flex>
    </Box>
  );
}
