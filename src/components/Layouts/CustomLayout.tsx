import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useDocumentTitle } from '~/hooks';

type CustomLayoutProps = {
  children: ReactNode;
  flexProps?: FlexProps;
  firstBoxProps?: FlexProps;
  secondBoxProps?: FlexProps;
  headTitle: string;
};
export const CustomLayout = ({
  children,
  firstBoxProps,
  flexProps,
  secondBoxProps,
  headTitle,
}: CustomLayoutProps): JSX.Element => {
  useDocumentTitle({ title: headTitle });

  return (
    <Flex h='100vh' bg='primary.0' pos='relative' overflowX='hidden' {...flexProps}>
      <Box
        zIndex={0}
        position='absolute'
        w='20%'
        h='40%'
        bg='secondary.50'
        filter='blur(20rem)'
        {...firstBoxProps}
      />
      {children}
      <Box
        zIndex={0}
        position='absolute'
        bottom={0}
        right={0}
        w='20%'
        h='25%'
        bg='secondary.100'
        filter='blur(30rem)'
        {...secondBoxProps}
      />
    </Flex>
  );
};
