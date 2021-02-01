import React from 'react';
import NextLink from 'next/link';
import { Avatar, Button, Box, Flex, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import LogoIcon from './custom/LogoIcon';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box backgroundColor="gray.100" minHeight="100vh" mb={12}>
      <Flex
        backgroundColor="white"
        mb={16}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          align="center"
          backgroundColor="white"
          justify="space-between"
          py={4}
          px={8}
          maxW="1250px"
          margin="0 auto"
          w="full"
          h="70px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <LogoIcon boxSize={12} mr={8} />
              </Link>
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex align="center" justify="center">
            {user && (
              <NextLink href="/account" passHref>
                <Button variant="ghost" mr={2}>
                  Account
                </Button>
              </NextLink>
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
