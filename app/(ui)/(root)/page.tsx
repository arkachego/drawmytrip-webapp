'use client';

// Libraries
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// Components
import Authoriser from "@/components/Authoriser";

// Utilities
import { useAppSelector } from '@/utilities/redux';

type Props = {
  children: React.ReactNode,
};

const RootPage: React.FC<Props> = ({ children }) => {

  const router = useRouter();
  const pathname = usePathname();
  const profile: object | null = useAppSelector(state => state.global.profile);

  useEffect(() => {
    if (profile && pathname === '/') {
      router.push('/trips');
    }
  }, [ profile, pathname ]);

  return profile ? null : (
    <Authoriser/>
  );
  
};

export default RootPage;
