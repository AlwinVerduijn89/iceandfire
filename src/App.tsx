import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import HouseList from "./houses/HouseList"


export const App = () => {
  return (    
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Grid minH="100vh" templateColumns="75% 1fr" gap={6} textAlign="left">
          <GridItem w="100%" h="100%" bg="gray.50" style={{padding: 16}} >
            <HouseList  />            
          </GridItem>
          <GridItem w="100%" h="auto" bg="gray.50">
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>    
  );
};