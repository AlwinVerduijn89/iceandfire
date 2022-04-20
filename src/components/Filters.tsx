import React from 'react';
import { VStack, Button, Box } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, } from '@chakra-ui/icons';


type Props = {
  onPageDecrement: React.MouseEventHandler<HTMLButtonElement>,
  onPageIncrement: React.MouseEventHandler<HTMLButtonElement>,
  page: number
};

function Filters({ onPageDecrement, onPageIncrement, page }: Props) {  

  return (
    <VStack>
        <Box p={4} maxW='lg' style={{ marginTop: 16, display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button isDisabled={page === 1} onClick={onPageDecrement} leftIcon={<ArrowBackIcon />}>Previous page</Button>
            <Button onClick={onPageIncrement} rightIcon={<ArrowForwardIcon />}>Next page</Button>
        </Box>
    </VStack>
  );
};

export default Filters;