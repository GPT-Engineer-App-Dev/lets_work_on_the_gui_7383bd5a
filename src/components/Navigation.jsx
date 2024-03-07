import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="blue.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/gui" px={2}>
          GUI Updates
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
