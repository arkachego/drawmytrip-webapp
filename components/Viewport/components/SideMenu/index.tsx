"use client";

// Libraries
import { usePathname, useRouter } from 'next/navigation';
import { Flex, MantineColorsTuple, Stack, Text } from '@mantine/core';

// Utilities
import { useAppSelector } from "@/utilities/redux";

// Helpers
import { getMenuItemIcon } from './helper';

type Props = {
  shades: MantineColorsTuple;
};

const SideMenu: React.FC<Props> = ({ shades }) => {

  const router = useRouter();
  const pathname = usePathname();
  const items = useAppSelector(state => state.viewport.items);

  return (
    <Stack gap={8} p="md" w='100%'>
      {items.map(item => {
        const Icon = getMenuItemIcon(item);
        return (
          <Flex
            key={item.label}
            px={12}
            py={6}
            gap="xs"
            align="center"
            style={{
              borderRadius: 16,
              cursor: "pointer",
              backgroundColor: item.link === pathname ? shades[3] : 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = shades[2];
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = item.link === pathname ? shades[3] : 'transparent';
            }}
            onClick={() => router.push(item.link)}
          >
            <Icon/>
            <Text mt={2} fw={item.link === pathname ? 700 : 400}>{item.label}</Text>
          </Flex>
        );
      })}
    </Stack>
  );
  
};

export default SideMenu;
