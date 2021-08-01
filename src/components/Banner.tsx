import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  VStack,
  Stack,
} from '@chakra-ui/react';

interface BannerProps {
  title: string;
  description?: string;
  backgroundImage: string;
  secondaryImage?: string;
}

export function Banner({
  title,
  description,
  backgroundImage,
  secondaryImage,
}: BannerProps) {
  return (
    <Box
      w="100%"
      bgImage={backgroundImage}
      bgPosition="start"
      bgRepeat="no-repeat"
      height="500px">
      <Flex justifyContent="space-around" align="start" alignItems="center">
        <Stack pt="8" w="30%" gap="4" justify="start" align="start">
          <Heading fontSize="4xl" color="white">
            {title}
          </Heading>
          <Text color="white" fontSize="lg">
            {description}
          </Text>
        </Stack>

        <Box mt="20">
          {secondaryImage && <Image src={secondaryImage} alt="world-trip" />}
        </Box>
      </Flex>
    </Box>
  );
}
