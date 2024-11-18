"use client";

import CreateChannelModal from "@/features/channels/components/createChannelModal";
import CreateWorksapceModal from "@/features/workspaces/components/CreateWorksapceModal";
import { useEffect, useState } from "react";
const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <CreateChannelModal />
      <CreateWorksapceModal />
    </>
  );
};

export default Modals;
