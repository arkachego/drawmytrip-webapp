// Libraries
import { Box, Container, ScrollArea } from "@mantine/core";

// Utilities
import { useAppSelector } from "@/utilities/redux";

type Props = {
  header?: React.ReactNode;
  content: React.ReactNode;
  contained: boolean;
  scrollable: boolean;
  onBottomReached?: () => void;
};

const Viewport: React.FC<Props> = ({
  header = null,
  content,
  contained,
  scrollable,
  onBottomReached = () => {},
}) => {

  const height = useAppSelector(state => state.global.height - 139);

  const children = contained ? (
    <Container p="md">
      {content}
    </Container>
  ) : content;

  return (
    <>
      {header && (
        <Box bg='#FFFFFF' style={{ borderBottom: 'thin solid #CED4DA' }}>
          {header}
        </Box>
      )}
      {scrollable ? (
        <ScrollArea w='100%' h={height} onBottomReached={onBottomReached}>
          {children}
        </ScrollArea>
      ) : (
        <Box w='100%' h={height}>
          {children}
        </Box>
      )}
    </>
  );

};

export default Viewport;
