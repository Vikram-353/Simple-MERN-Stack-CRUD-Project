// import React, { useEffect } from 'react';
// import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
// import { Link } from 'react-router-dom';
// import { useProductStore } from '../store/product';
// import ProductCard from '../components/ProductCard';

// function HomePage() {
//   const { fetchProducts, products } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   console.log("products",products); 

//   return (
//     <Container maxW={'container.xl'} py={12}>
//       <VStack spacing={8}>
//         <Text
//           fontSize={"30"}
//           fontWeight={"bold"}
//           bgGradient={"linear(to-r,purple.400,blue.500)"}
//           bgClip={"text"}
//           textAlign={"center"}
//         >
//           Current Product 📌
//         </Text>
//         {products.length === 0 ? ( // Conditional rendering for products
//           <Text fontSize='xl' textAlign={"center"} fontWeight={"bold"} color='gray.500'>
//             No Products found😥{" "}
//             <Link to={"/create"}>
//               <Text as={'span'} color={"blue.500"} _hover={{ textDecoration: "underline" }}>
//                 Create a Product.
//               </Text>
//             </Link>
//           </Text>
//         ) : (
//           <SimpleGrid
//             columns={{
//               base: 1,
//               md: 2,
//               lg: 3
//             }}
//             spacing={10}
//             w={"full"}
//           >
//             {products.map(product => (
//               <ProductCard key={product._id}product={product}/>// Render your products here
//             ))}
//           </SimpleGrid>
//         )}
//       </VStack>
//     </Container>
//   );
// }

// export default HomePage;


// import React, { useEffect } from 'react';
// import { Container, VStack, Text, SimpleGrid, useColorModeValue} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { useProductStore } from '../store/product';
// import ProductCard from '../components/ProductCard';

// function HomePage() {
//   const { fetchProducts, products } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   return (
//     <Container maxW="container.xl" py={12} bg={useColorModeValue('gray.50', 'gray.900')} borderRadius="lg" boxShadow="xl">
//       <VStack spacing={8}>
//         <Text
//           fontSize="32px"
//           fontWeight="extrabold"
//           bgGradient="linear(to-r, teal.400, cyan.500)"
//           bgClip="text"
//           textAlign="center"
//         >
//           Current Products 📌
//         </Text>
//         {products.length === 0 ? (
//           <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
//             No Products Found 😥{' '}
//             <Link to="/create">
//               <Text as="span" color="cyan.500" _hover={{ textDecoration: 'underline' }}>
//                 Create a Product.
//               </Text>
//             </Link>
//           </Text>
//         ) : (
//           <SimpleGrid
//             columns={{
//               base: 1,
//               md: 2,
//               lg: 3,
//             }}
//             spacing={8}
//             w="full"
//           >
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </SimpleGrid>
//         )}
//       </VStack>
//     </Container>
//   );
// }

// export default HomePage;


import React, { useEffect } from 'react';
import { Container, VStack, Text, SimpleGrid,useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const MotionText = motion(Text);
const MotionSimpleGrid = motion(SimpleGrid);

function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12} bg={useColorModeValue('gray.50', 'gray.900')} borderRadius="lg" boxShadow="xl">
      <VStack spacing={8}>
        <MotionText
          fontSize="32px"
          fontWeight="extrabold"
          bgGradient="linear(to-r, teal.400, cyan.500)"
          bgClip="text"
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Current Products 📌
        </MotionText>
        {products.length === 0 ? (
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
            No Products Found 😥{' '}
            <Link to="/create">
              <Text as="span" color="cyan.500" _hover={{ textDecoration: 'underline' }}>
                Create a Product.
              </Text>
            </Link>
          </Text>
        ) : (
          <MotionSimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={8}
            w="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, duration: 0.8 }}
          >
            {products.map((product) => (
              <motion.div
                key={product._id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </MotionSimpleGrid>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;
