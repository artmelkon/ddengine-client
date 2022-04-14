import { gql } from "apollo-boost";
import { itemFragments } from "./fragments";

/* ============================= *\
              Queries
\* ============================= */

export const GET_USERS = gql`
  query {
    getUsers {
      _id
      name
    }
  }
`;
export const GET_CURRENT_USER = gql`
  query GetCurrentUser($_id: ID!) {
    getCurrentUser(_id: $_id) {
      name
      email
      fileIds {
        filename
        _id
      }
      isAdmin
      role
    }
  }
`;
export const GET_USER_FILES = gql`
  query GetUserFiles(
    $creatorId: ID!
    $isFileManager: Boolean!
    $isFile: Boolean!
  ) {
    getUserFiles(
      creatorId: $creatorId
      isFileManager: $isFileManager
      isFile: $isFile
    ) {
      ...itemDetails
      filesize
      filetype
      mimetype
      filepath
      imgUrl
      iconId {
        _id
      }
      creatorId {
        _id
      }
      createdAt
      updatedAt
    }
  }
  ${itemFragments.item}
`;
// export const GET_CURRENT_DIRECTORY = gql`
//   query GetCurrentDirectory($parent: String!) {
//     getCurrentDirectory(parent: $parent) {
//       ...ItemDetails
//       ... on File {
//         filesize
//         filetype
//         mimetype
//         itemurl
//       }
//       ... on Folder {
//         children
//       }
//     }
//   }
//   ${itemFragments.item}
// `;
export const GET_FOLDER = gql`
  query GetFolder($_id: ID!) {
    getFolder(_id: $_id) {
      _id
      itemname
      itempath
      parent
      parentpath
      ancestors
      isFile
      ... on Folder {
        children
      }
    }
  }
`;
export const GET_FILE = gql`
  query GetFile($id: ID!) {
    getFile(_id: $id) {
      ...ItemDetails
      ... on File {
        filesize
        filetype
        mimetype
        itemurl
        ownerId {
          _id
          name
        }
      }
    }
  }
  ${itemFragments.item}
`;
// export const GET_ACTIVE_PRODUCTS = gql`
//   query GetActiveProducts {
//     getActiveProducts {
//       _id
//       title
//       imageUrl
//       fileName
//       creator {
//         _id
//       }
//       printer {
//         _id
//       }
//     }
//   }
// `;
export const SEARCH_FILES = gql`
  query SearchFiles($isFile: Boolean!, $searchTerm: String) {
    searchFiles(isFile: $isFile, searchTerm: $searchTerm) {
      ... on File {
        itemname
        _id
      }
    }
  }
`;
export const GET_ALL_HUBDEVICES = gql`
  query {
    getAllHubDevices {
      _id
      device
    }
  }
`;
export const GET_ALL_HUBCOLUMNS = gql`
  query GetAllHubColumns {
    getAllHubColumns {
      _id
      title
      fileIds {
        ... on File {
          _id
          itemname
        }
      }
    }
  }
`;
export const GET_DND_HUBTABLE = gql`
  query GetDnDHubTable($tableName: String!) {
    getDnDHubTable(tableName: $tableName) {
      files {
        _id
        filename
      }
      columns {
        _id
        title
        fileIds {
          _id
          filename
        }
      }
      columnOrder {
        _id
      }
    }
  }
`;

/* ============================= *\
            Mutations
\* ============================= */
export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
export const DELETE_ITEM = gql `
  mutation DeleteItem($_id: ID!) {
    deleteItem(_id: $_id) {
      _id
    }
  }
`;
export const UPLOAD_HUBFILE = gql`
  mutation UploadHubFile(
    $file: Upload!
    $filetype: String!
    $filesize: Int!
    $creatorId: ID
  ) {
    uploadHubFile(
      file: $file
      filetype: $filetype
      filesize: $filesize
      creatorId: $creatorId
    ) {
      _id
      filename
      filepath
      filesize
      filetype
      mimetype
      fileurl
      creatorId {
        _id
      }
      ownerId {
        _id
      }
      updatedAt
      createdAt
    }
  }
`;
export const MOVE_ASSET = gql`
  mutation MoveAsset($_id: ID!, $printer: String!) {
    moveAsset(_id: $_id, printer: $printer) {
      _id
      title
      imageUrl
      fileName
    }
  }
`;
export const ADD_TO_HUBCOLUMN = gql`
  mutation AddToHubColumn($_id: ID!, $fileIds: [ID]) {
    addToHubColumn(_id: $_id, fileIds: $fileIds) {
      fileIds {
        _id
      }
    }
  }
`;
export const UPDATE_HUBCOLUMN = gql`
  mutation UpdateHubColumn($_id: ID!, $fileIds: [ID]) {
    updateHubColumn(_id: $_id, fileIds: $fileIds) {
      fileIds {
        _id
      }
    }
  }
`;
export const REMOVE_FROM_HUBCOLUMN = gql`
  mutation RemoveFromHubColumn($_id: ID!, $fileIds: [ID]) {
    removeFromHubColumn(_id: $_id, fileIds: $fileIds) {
      fileIds {
        _id
      }
    }
  }
`;
