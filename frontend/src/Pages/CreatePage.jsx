import React, { useState } from 'react';
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
  Box,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { FaPlusCircle } from 'react-icons/fa';

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    console.log('Success:', success);
    console.log('Message:', message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      toast({
        title: 'All fields are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Product added successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Clear the form after submission
    setNewProduct({
      name: '',
      price: '',
      image: '',
    });
  };

  // Use color mode values for light and dark themes
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const boxColor = useColorModeValue('white', 'gray.800');
  const inputColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Container maxW="container.md" mt={8}>
      <Box
        p={8}
        boxShadow="lg"
        borderRadius="md"
        bg={boxColor}
        color={textColor}
      >
        <Heading mb={6} textAlign="center">
          <Text fontSize="3xl" fontWeight="extrabold">
            Add a New Product
          </Text>
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="product-name" isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Enter product name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                focusBorderColor="teal.300"
                bg={inputColor}
                color={textColor}
              />
            </FormControl>

            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                placeholder="Enter product price"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                focusBorderColor="teal.300"
                bg={inputColor}
                color={textColor}
              />
            </FormControl>

            <FormControl id="image-url" isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="url"
                placeholder="Enter image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                focusBorderColor="teal.300"
                bg={inputColor}
                color={textColor}
              />
            </FormControl>

            <Button
              colorScheme="teal"
              type="submit"
              width="full"
              onClick={handleAddProduct}
              leftIcon={<Icon as={FaPlusCircle} />}
              _hover={{ bg: 'teal.500' }}
              _active={{ bg: 'teal.600' }}
            >
              Add Product
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}

export default CreatePage;
