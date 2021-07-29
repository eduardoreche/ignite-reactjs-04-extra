import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const MySwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev,
  .swiper-button-disabled {
    color: ${theme.colors.yellow[500]};
  }
`;
