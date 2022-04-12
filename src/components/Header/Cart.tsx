import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";

function Cart(){
    return (
        <Link href="/carrinho">
            <Button colorScheme="transparent">
                <Box position="relative">
                    <Box
                        borderRadius="50%"
                        position="absolute"
                        right="-1"
                        width="5"
                        height="5"
                        textAlign="center"
                        background="blue.600"
                        zIndex={2}
                    >
                        <Text lineHeight="5">3</Text>
                    </Box>
                    <IconButton
                        fontSize="4xl"
                        mt="1"
                        icon={<BiCartAlt/>}
                        aria-label="Carrinho de compras"
                        colorScheme="transparent"
                        color="yellow.400"
                    />
                </Box>
            </Button>
        </Link>
    )
}

export { Cart }