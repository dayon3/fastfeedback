import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={6}>Welcome 👋 Let's get started.</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
