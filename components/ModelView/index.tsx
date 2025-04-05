'use client';

// Libraries
import { Box, Button, Flex, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

// Components
import ListView from '@/components/ListView';

type Props = {
  model: string;
  filter: object;
  modifier?: React.ReactNode;
  onCreate?: () => void;
};

const ModelView: React.FC<Props> = ({ model, filter, modifier, onCreate }) => {

  return (
    <ListView
      model={model}
      filter={filter}
      modifier={(
        <Flex align="center" p="md" gap="md">
          <Box style={{ flexGrow: 1 }}>
            {modifier}
          </Box>
          {onCreate && (
            <Button
              onClick={onCreate}
            >
              <IconPlus size={20}/>
              <Text ml={4}>Add</Text>
            </Button>
          )}
        </Flex>
      )}
    />
  );

};

export default ModelView;
