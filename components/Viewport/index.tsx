// Libraries
import { AppShell, ScrollArea, MantineColorsTuple } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Components
import TopMenu from "@/components/TopMenu";
import SideMenu from "@/components/SideMenu";
import ProfileItem from "@/components/ProfileItem";

type Props = {
  children: React.ReactNode;
  shades: MantineColorsTuple;
};

const Viewport: React.FC<Props> = ({ children, shades }) => {

  const [ opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 270, breakpoint: 'sm', collapsed: { mobile: !opened } }}
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
          <SideMenu/>
        </AppShell.Section>
        <AppShell.Section px="md" py="sm" style={{ backgroundColor: shades[2] }}>
          <ProfileItem/>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main style={{ backgroundColor: shades[0] }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );

};

export default Viewport;