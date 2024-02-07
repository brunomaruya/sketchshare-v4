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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

import { appwriteConfig, databases, storage } from "@/lib/appwrite/config";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ID } from "appwrite";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { CircularProgress } from "@mui/material";

export default function PostBtn() {
  const [file, setFile] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [url, setUrl] = useState<any>();
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleDescriptionChange = (e: any) => {
    if (e.target.value) {
      setDescription(e.target.value);
    }
  };

  const createFile = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    if (file) {
      try {
        await storage
          .createFile(
            appwriteConfig.storageId ? appwriteConfig.storageId : "",
            ID.unique(),
            file
          )
          .then((resolver) => {
            // console.log("file created");
            // console.log(promise);
            getFileView(resolver);
          });
      } catch (err) {
        console.log("createFile() err: " + err);
      }
    }
  };

  const getFileView = async (file: any) => {
    try {
      const promise = storage.getFileView(
        appwriteConfig.storageId ? appwriteConfig.storageId : "",
        file.$id
      );
      setUrl(promise);
    } catch (err) {
      console.log("getFileView() err: " + err);
    }
  };

  const createPost = async () => {
    try {
      databases
        .createDocument(
          appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
          appwriteConfig.postCollectionId
            ? appwriteConfig.postCollectionId
            : "",
          ID.unique(),
          {
            postCreator: [currentUser.$id],
            imageUrl: url,
            imageId: ID.unique(),
            caption: description,
          }
        )
        .then((resolver) => {
          setFile(null);
          setIsLoading(false);
          location.reload();
        });
    } catch (err) {
      console.log("createPost err: " + err);
    }
  };
  useEffect(() => {
    if (currentUser) {
      createPost();
    }
  }, [url]);

  return (
    <AlertDialog>
      {currentUser ? (
        <AlertDialogTrigger>
          <PlusCircleIcon className="size-icon" />
        </AlertDialogTrigger>
      ) : (
        <Popover>
          <PopoverTrigger>
            <PlusCircleIcon className="size-icon" />
          </PopoverTrigger>
          <PopoverContent className="bg-background w-full">
            Sign in to post
          </PopoverContent>
        </Popover>
      )}

      <AlertDialogContent className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background">
        <AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row justify-end">
            <AlertDialogCancel className="hover:bg-primary  ">
              X
            </AlertDialogCancel>
          </AlertDialogFooter>
          <AlertDialogTitle>Post your art</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-3">
            <Textarea
              placeholder="Add a description."
              onChange={handleDescriptionChange}
            />

            <input type="file" onChange={handleFileChange} />
            {file ? (
              <AlertDialogAction
                onClick={createFile}
                className={"bg-accent hover:bg-primary w-20"}
              >
                {isLoading ? <CircularProgress /> : "Post"}
              </AlertDialogAction>
            ) : (
              ""
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
