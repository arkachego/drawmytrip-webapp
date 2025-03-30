'use client';

import { Button } from "@mantine/core";
import { signOut } from "aws-amplify/auth";
import { useEffect } from "react";

const RootPage: React.FC = () => {

  return (
    <div>
      <Button onClick={() => signOut()}>Sign-Out</Button>
    </div>
  );

};

export default RootPage;
