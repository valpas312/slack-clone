"use client"

import CreateWorksapceModal from "@/features/workspaces/components/createWorksapceModal"
import { useEffect, useState } from "react"
const Modals = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
  return (
    <CreateWorksapceModal />
  )
}

export default Modals