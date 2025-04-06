// Libraries
import { useDisclosure } from "@mantine/hooks";
import { AppShell, ScrollArea, MantineColorsTuple } from "@mantine/core";

// Components
import TopMenu from "@/components/Skeleton/components/TopMenu";
import SideMenu from "@/components/Skeleton/components/SideMenu";
import ProfileItem from "@/components/Skeleton/components/ProfileItem";

type Props = {
  children: React.ReactNode;
  shades: MantineColorsTuple;
};

const TOP_MENU_HEIGHT = 70;
const SIDE_MENU_WIDTH = 270;

const Skeleton: React.FC<Props> = ({ children, shades }) => {

  const [ opened, { toggle }] = useDisclosure();

  console.log(opened, 'opened');

  return (
    <AppShell
      header={{ height: TOP_MENU_HEIGHT }}
      navbar={{ width: SIDE_MENU_WIDTH, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header style={{ backgroundColor: shades[7], border: 0 }}>
        <TopMenu
          shades={shades}
          opened={opened}
          toggle={toggle}
        />
      </AppShell.Header>
      <AppShell.Navbar style={{ backgroundColor: shades[1], border: 0 }}>
        <AppShell.Section grow={true} component={ScrollArea}>
          <SideMenu
            shades={shades}
          />
        </AppShell.Section>
        <AppShell.Section px="md" py="sm" style={{ backgroundColor: shades[2] }}>
          <ProfileItem/>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main w='100%' h='100%' style={{ backgroundColor: shades[0], overflow: 'hidden' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );

};

export default Skeleton;
