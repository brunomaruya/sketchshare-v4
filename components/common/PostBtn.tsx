import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function PostBtn() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <PlusCircleIcon className="size-icon" />
      </AlertDialogTrigger>
      <AlertDialogContent className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-primary">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-accent hover:bg-primary">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
