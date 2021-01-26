import { Flex, Link } from '@chakra-ui/react';

const FeedbackLink = ({ siteId }) => {
  return (
    <Flex justify="space-between" mb={8} w="full" mt={1}>
      <Link fontWeight="bold" fontSize="sm" href={`/p/${siteId}`}>
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/">
        Powered by Fast Feedback
      </Link>
    </Flex>
  );
};

export default FeedbackLink;
