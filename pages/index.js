import { useAuth } from '@/lib/auth';
import { Button, Code, Heading } from '@chakra-ui/react';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>

        <p>
          Current user:
          <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </p>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
