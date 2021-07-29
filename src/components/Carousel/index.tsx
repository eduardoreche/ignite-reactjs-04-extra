import { Image, Stack, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import { MySwiper } from './styles';

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <MySwiper cssMode={true} navigation={true} pagination={true}>
      <SwiperSlide>
        <Stack
          w="100%"
          bgImage="/images/europe.jpg"
          bgPosition="cover"
          objectFit="fill"
          height="450px"
          width="100%"
          align="center"
          justify="center">
          <Heading fontSize="6xl" color="whiteAlpha.900">
            Europa
          </Heading>
          <Text fontSize="3xl" color="whiteAlpha.900">
            O continente mais antigo
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide>
        <Stack
          w="100%"
          bgImage="/images/africa.jpg"
          bgPosition="center"
          objectFit="fill"
          height="450px"
          width="100%"
          align="center"
          justify="center">
          <Heading fontSize="6xl" color="whiteAlpha.900">
            Africa
          </Heading>
          <Text fontSize="3xl" color="whiteAlpha.900">
            Wild world
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide>
        <Stack
          w="100%"
          bgImage="/images/sa.jpg"
          bgPosition="center"
          objectFit="fill"
          height="450px"
          width="100%"
          align="center"
          justify="center">
          <Heading fontSize="6xl" color="whiteAlpha.900">
            America do Sul
          </Heading>
          <Text fontSize="3xl" color="whiteAlpha.900">
            Lendas
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide>
        <Stack
          w="100%"
          bgImage="/images/na.jpg"
          bgPosition="center"
          objectFit="fill"
          height="450px"
          width="100%"
          align="center"
          justify="center">
          <Heading fontSize="6xl" color="whiteAlpha.900">
            América do Norte
          </Heading>
          <Text fontSize="3xl" color="whiteAlpha.900">
            Liberdade
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide>
        <Stack
          w="100%"
          bgImage="/images/oceania.jpg"
          bgPosition="center"
          objectFit="fill"
          height="450px"
          width="100%"
          align="center"
          justify="center">
          <Heading fontSize="6xl" color="whiteAlpha.900">
            Oceania
          </Heading>
          <Text fontSize="3xl" color="whiteAlpha.900">
            ...
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide>
        <Stack
          w="100%"
          bgImage="/images/asia.jpg"
          bgPosition="center"
          objectFit="fill"
          height="450px"
          width="100%"
          align="center"
          justify="center">
          <Heading fontSize="6xl" color="whiteAlpha.900">
            Ásia
          </Heading>
          <Text fontSize="3xl" color="whiteAlpha.900">
            Oriente
          </Text>
        </Stack>
      </SwiperSlide>
    </MySwiper>
  );
}
