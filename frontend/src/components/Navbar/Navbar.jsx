import {
  Container,
  Flex,
  HStack,
  Text,
  Button,
  useColorModeValue,
  IconButton,
  Stack,
  Box,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useColorMode } from '@chakra-ui/react';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { LuSun } from 'react-icons/lu';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      boxShadow="md"
      bg={useColorModeValue('white', 'gray.800')}
      position="sticky"
      top="0"
      zIndex="10"
      transition="background-color 0.3s ease-in-out"
    >
      <Container maxW="1140px" px={6} py={4}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          flexDir={{
            base: 'column',
            sm: 'row',
          }}
        >
          <Text
            fontSize={{ base: '22px', sm: '28px' }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, teal.400, cyan.500)"
            bgClip="text"
            _hover={{
              bgGradient: 'linear(to-r, pink.400, orange.500)',
            }}
            transition="background-color 0.3s ease-in-out"
          >
            <Link to="/">Product Store</Link>
          </Text>

          <HStack display={{ base: 'none', md: 'flex' }} spacing={4} alignItems="center" mt={{ base: 4, sm: 0 }}>
            <Link to="/create">
              <Button
                colorScheme="teal"
                variant="solid"
                size="sm"
                leftIcon={<AiOutlinePlusSquare />}
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              >
                Create
              </Button>
            </Link>
            <Button
              onClick={toggleColorMode}
              colorScheme="teal"
              variant="ghost"
              size="sm"
              _hover={{
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              {colorMode === 'light' ? <FaMoon /> : <LuSun />}
            </Button>
          </HStack>

          <IconButton
            aria-label="Toggle Navigation"
            icon={isOpen ? <FaTimes /> : <FaBars />}
            display={{ md: 'none' }}
            onClick={onToggle}
            size="md"
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.600'),
            }}
            justifyContent="center"
            alignItems="center"
            isRound
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack
            as="nav"
            spacing={4}
            display={{ md: 'none' }}
            pb={4}
            pt={2}
            bg={useColorModeValue('gray.100', 'gray.700')}
            rounded="md"
            boxShadow="md"
          >
            <Link to="/create">
              <Button
                w="full"
                variant="ghost"
                colorScheme="teal"
                _hover={{
                  bg: useColorModeValue('teal.100', 'teal.600'),
                  transition: 'background-color 0.2s ease-in-out',
                }}
              >
                Create
              </Button>
            </Link>
            <Button
              onClick={toggleColorMode}
              w="full"
              variant="ghost"
              colorScheme="teal"
              _hover={{
                bg: useColorModeValue('teal.100', 'teal.600'),
                transition: 'background-color 0.2s ease-in-out',
              }}
            >
              {colorMode === 'light' ? <FaMoon /> : <LuSun />}
            </Button>
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
}

export default Navbar;
