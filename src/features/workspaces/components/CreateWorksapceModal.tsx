"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "../store/useCreateWorkspaceModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspaces } from "../api/useCreateWorkspaces";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CreateWorksapceModal = () => {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState("");

  const handleClose = () => {
    setOpen(false)
    setName("")
  };

  const { mutate, isPending} = useCreateWorkspaces();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutate({ name },{
      onSuccess(id) {
        router.push(`/workspace/${id}`);
        handleClose();
        toast.success("Workspace created successfully");
      }
    });

  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            placeholder="Workspace Name (e.g. My Workspace)"
            disabled={isPending}
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus={true}
            minLength={3}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorksapceModal;
