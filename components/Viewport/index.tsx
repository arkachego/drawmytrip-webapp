// Libraries
import { useDisclosure } from "@mantine/hooks";
import { AppShell, ScrollArea, MantineColorsTuple } from "@mantine/core";

// Components
import TopMenu from "@/components/Viewport/components/TopMenu";
import SideMenu from "@/components/Viewport/components/SideMenu";
import ProfileItem from "@/components/Viewport/components/ProfileItem";

type Props = {
  children: React.ReactNode;
  shades: MantineColorsTuple;
};

const TOP_MENU_HEIGHT = 70;
const SIDE_MENU_WIDTH = 270;

const Viewport: React.FC<Props> = ({ children, shades }) => {

  const [ opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: TOP_MENU_HEIGHT }}
      navbar={{ width: SIDE_MENU_WIDTH, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
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
      <AppShell.Main style={{ backgroundColor: shades[0] }} pl={SIDE_MENU_WIDTH} pr={0} pt={TOP_MENU_HEIGHT} pb={0}>
        {children}
      </AppShell.Main>
    </AppShell>
  );

};

export default Viewport;
