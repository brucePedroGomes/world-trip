import { Image, HStack, Stack, Divider } from '@chakra-ui/react';
import nightLifeImg from '../../assets/Nightlife.svg';
import beachImg from '../../assets/Beach.svg';
import modernImg from '../../assets/Modern.svg';
import classicImg from '../../assets/Classic.svg';
import moreImg from '../../assets/More.svg';

const travelTypes = [
  { img: nightLifeImg, title: 'vida noturna' },
  { img: beachImg, tilte: 'praia' },
  { img: modernImg, title: 'moderno' },
  { img: classicImg, title: 'clássico' },
  { img: moreImg, title: 'e mais...' },
];

export const TravelTypes = () => {
  return (
    <Stack align="center">
      <HStack spacing="32" m="16">
        {travelTypes.map(({ img }) => (
          <Image key={img} w="200px" h="200px" src={img} />
        ))}
      </HStack>

      <Divider w="100px" h="2px" bg="#47585B" />
    </Stack>
  );
};
