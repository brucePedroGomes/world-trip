import { Flex, Img } from '@chakra-ui/react';
import logoImg from '../../assets/Logo.svg';

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      align="center"
      justifyContent="center"
      ml="auto"
    >
      <Img src={logoImg} alt="logo" h="45px" w="184px" />
    </Flex>
  );
};
