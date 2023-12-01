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
import { appwriteConfig, databases, storage } from "@/lib/appwrite/config";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ID } from "appwrite";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { CircularProgress } from "@mui/material";

export default function PostBtn() {
  const [file, setFile] = useState<any>();
  const [url, setUrl] = useState<any>();
  const { currentUser } = useContext(UserContext);
  const [urls, setUrls] = useState([]);
  const [files, setFiles] = useState([]);
  const [filesIds, setFilesIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const createFile = async (e: any) => {
    setIsLoading(true);
    console.log("createFile clicked");
    e.preventDefault();

    if (file) {
      try {
        const promise = await storage
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
        console.log("Erro eh: " + err);
      }
    }
  };

  const getFileView = async (file: any) => {
    console.log("getFileView called");
    try {
      const promise = storage.getFileView(
        appwriteConfig.storageId ? appwriteConfig.storageId : "",
        file.$id
      );
      setUrl(promise);
      console.log("url:");
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  };

  const createPost = async () => {
    console.log("createPost called");

    try {
      console.log("currentUser inside function");
      console.log(currentUser);
      const promise = databases
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
          }
        )
        .then((resolver) => {
          console.log("createPostSuccess:");
          console.log(resolver);
          setFile(null);
          setIsLoading(false);
          location.reload();
        });
    } catch (err) {
      console.log("erro de createPost: " + err);
    }
  };
  useEffect(() => {
    if (currentUser) {
      createPost();
    }
  }, [url]);

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <PlusCircleIcon className="size-icon" />
      </AlertDialogTrigger>
      <AlertDialogContent className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background">
        <AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-primary">
              X
            </AlertDialogCancel>
          </AlertDialogFooter>
          <AlertDialogTitle>Post your art</AlertDialogTitle>
          <AlertDialogDescription>
            <input type="file" onChange={handleFileChange} />
            <AlertDialogAction
              onClick={createFile}
              className={
                file
                  ? "bg-accent hover:bg-primary w-20"
                  : "bg-accent hover:bg-primary w-20 cursor-no-drop"
              }
            >
              {isLoading ? <CircularProgress /> : "Post"}
            </AlertDialogAction>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
