export interface IPosts {
  imageUrl: string;
  imageId: string;
  location: any;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}

export interface ICurrentUser {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  labels: any[];
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  prefs: Object;
  accessedAt: string;
}
export interface IUserList {
  username: string;
  accountId: string;
  email: string;
  bio: any;
  imageId: any;
  imageUrl: any;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  save: any[];
  postedArt: PostedArt[];
  $databaseId: string;
  $collectionId: string;
}

export interface PostedArt {
  caption: any;
  tags: any[];
  imageUrl: string;
  imageId: string;
  location: any;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}
