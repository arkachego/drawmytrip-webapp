'use client';

// Libraries
import { Box, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

// Components
import ModelView from '@/components/ModelView';

// Forms
import VehicleForm from '@/forms/VehicleForm';

const VehiclesPage: React.FC = () => {

  return (
    <ModelView
      model='country'
      filter={{}}
      modifier={(
        <Flex justify="space-between">
          <Box/>
          <TextInput
            w={280}
            variant='filled'
            rightSection={<IconSearch size={20}/>}
          />
        </Flex>
      )}
      onCreate={() => {}}
    />
  );

};

export default VehiclesPage;
