import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
        w="100vw"
      >
        <Stack spacing={4} isInline align="center">
          <Icon viewBox="0 0 46 32" boxSize={12}>
            <path
              d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
              fill="currentColor"
            />
          </Icon>
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          <Link>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Stack>
      </Flex>
      <Flex
        direction="row"
        backgroundColor="gray.100"
        p={8}
        height="100vh"
        w="100vw"
      >
        <Flex maxWidth="800px" w="100%" ml="auto" mr="auto" direction="column">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
