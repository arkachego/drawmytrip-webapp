'use client';

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
    <Provider store={store}>
      {children}
    </Provider>
  );
  
};

export default UILayout;
