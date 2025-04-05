'use client';

// Libraries
import { Box, ScrollArea } from "@mantine/core";

type Props = {
  children: React.ReactNode;
  modifier: React.ReactNode;
  scrollable: boolean;
  onBottomReached?: () => void;
};

const BaseView: React.FC<Props> = ({ children, modifier, scrollable, onBottomReached = () => {} }) => {

  return (
    <>
      <Box bg='#FFFFFF' style={{ borderBottom: 'thin solid #CED4DA' }}>
        {modifier}
      </Box>
      {scrollable ? (
        <ScrollArea w='100%' h={window.innerHeight - 139} onBottomReached={onBottomReached}>
          {children}
        </ScrollArea>
      ) : (
        <Box w='100%' h={window.innerHeight - 139}>
          {children}
        </Box>
      )}
    </>
  );

};

export default BaseView;
