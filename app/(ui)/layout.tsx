'use client';

// Libraries
import { Notifications } from '@mantine/notifications';

// Amplify
import "@/utilities/amplify";

// Libraries
import { Provider } from 'react-redux';

// Utilities
import { store } from '@/utilities/redux';

type Props = {
  children: React.ReactNode,
};

const UILayout: React.FC<Props> = ({ children }) => {

  return (
    <>
      <Notifications/>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  );
  
};

export default UILayout;
