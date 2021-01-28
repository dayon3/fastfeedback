import Head from 'next/head';
import { Button, Flex, Link, Text } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import LogoIcon from '@/components/custom/LogoIcon';
import GitHubIcon from '@/components/custom/GitHubIcon';
import GoogleIcon from '@/components/custom/GoogleIcon';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      justify="center"
      h="100vh"
      maxW="700px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <LogoIcon boxSize={14} mb={2} />
      <Text mb={8} fontSize="lg">
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {' is being built as part of '}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>

      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          size="lg"
          fontWeight="medium"
          mt={4}
          backgroundColor="gray.900"
          color="white"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <Flex>
          <Button
            onClick={(e) => auth.signinWithGitHub()}
            leftIcon={<GitHubIcon />}
            size="lg"
            fontWeight="medium"
            fontSize="1rem"
            mt={4}
            mr={4}
            borderRadius="0.25rem"
            backgroundColor="gray.900"
            color="white"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign in with GitHub
          </Button>

          <Button
            onClick={(e) => auth.signinWithGoogle()}
            leftIcon={<GoogleIcon />}
            size="lg"
            fontSize="1rem"
            fontWeight="medium"
            mt={4}
            borderRadius="0.25rem"
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign in with Google
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
