import React from 'react';
import NextLink from 'next/link';
import { Avatar, Button, Box, Flex, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import LogoIcon from './custom/LogoIcon';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          backgroundColor="white"
          justifyContent="space-between"
          py={4}
          px={8}
          maxW="1250px"
          margin="0 auto"
          w="full"
          h="70px"
        >
          <Flex alignItems="center">
            <NextLink href="/" passHref>
              <LogoIcon boxSize={12} mr={8} />
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log Out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
