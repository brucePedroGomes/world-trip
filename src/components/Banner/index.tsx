import {
  Text,
  Flex,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
  Stack,
  Center,
} from '@chakra-ui/react';
import backgroundImg from '../../assets/Background.svg';
import airPlaneImg from '../../assets/Airplane.svg';

export const Banner = () => {
  return (
    <Box
      backgroundImage={backgroundImg}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="335px"
      w="100%"
    >
      <Flex justify="space-between" h="full" align="center" px="24">
        <Stack spacing="4">
          <Text color="#F5F8FA" fontWeight="500" fontSize="36px">
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text color="#DADADA">
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Stack>

        <Image
          mt="24"
          src={airPlaneImg}
          alt="Air Plane"
          h="270px"
          w="417px"
          transform="auto"
          rotate="5deg"
        />
      </Flex>
    </Box>
  );
};
