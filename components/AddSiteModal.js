import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const AddSiteModal = () => {
  const initialRef = useRef();
  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const onCreateSite = ({ site, url }) => {
    createSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url
    });
    toast({
      title: 'Success.',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} fontWeight="medium">
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                name="site"
                ref={register({ required: true })}
                placeholder="My site"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                name="url"
                ref={register({ required: true })}
                placeholder="https://website.com"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
