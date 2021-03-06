import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import { Table, Th, Tr, Td } from './Table';

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
);

const SiteTableSkeleton = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="35px" />
        <SkeletonRow width="45px" />
        <SkeletonRow width="35px" />
        <SkeletonRow width="25px" />
        <SkeletonRow width="15px" />
      </tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
