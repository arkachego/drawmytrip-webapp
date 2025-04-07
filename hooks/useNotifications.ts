// Libraries
import { notifications } from '@mantine/notifications';

type NotificationConfig = {
  title: string;
  message: string;
  color: string;
  icon: React.ReactNode;
};

const useNotifications = () => {

  const notify: (config: NotificationConfig) => void = (config) => {
    console.log('notify called');
    notifications.show({
      ...config,
      autoClose: 5000,
      withCloseButton: true,
    });
  };

  return {
    notify,
  };

};

export default useNotifications;
