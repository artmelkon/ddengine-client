import { gql } from "apollo-boost";
import { productFragments, fileFragments } from "./fragments";

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
  query GetUserFiles($creatorId: ID!) {
    getUserFiles(creatorId: $creatorId) {
      _id
      filename
      filesize
      filetype
      mimetype
      filepath
      imgUrl
      parent
      ancestors
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
`;
export const GET_USER_PRODUCTS = gql`
  query GetUserProducts($creator: String!) {
    getUserProducts(creator: $creator) {
      _id
      title
      imageUrl
      fileName
      fileType
      message
      createdAt
    }
  }
`;
export const GEt_ALL_FILES = gql`
  query GetAllFiles {
    getAllFiles {
      _id
    }
  }
`;
export const GET_ALL_HUBFILES = gql`
  query GetAllHubFiles {
    getAllHubFiles {
      ...FileDetails
      iconId {
        _id
      }
      creatorId {
        _id
        name
      }
      ownerId {
        _id
        name
      }
    }
  }
  ${fileFragments.file}
`;
export const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      ...CompleteProduct
      printer {
        _id
      }
    }
  }
  ${productFragments.product}
`;
export const GET_FILE = gql`
  query GetFile($id: ID!) {
    getFile(_id: $id) {
      _id
      filename
      filesize
      filetype
      mimetype
      creatorId {
        _id
      }
    }
  }
`;
// export const GET_PRODUCT = gql`
//   query GetProduct($_id: ID!) {
//     getProduct(_id: $_id) {
//       ...CompleteProduct
//     }
//   }
//   ${productFragments.product}
// `;
export const GET_ACTIVE_PRODUCTS = gql`
  query GetActiveProducts {
    getActiveProducts {
      _id
      title
      imageUrl
      fileName
      creator {
        _id
      }
      printer {
        _id
      }
    }
  }
`;
export const SEARCH_FILES = gql`
  query SearchFiles($searchTerm: String) {
    searchFiles(searchTerm: $searchTerm) {
      _id
      filename
      createdAt
      creatorId {
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
        _id
        filename
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
export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $title: String!
    $message: String
    $fileName: String!
    $fileType: String!
    $file: Upload!
    $label: Boolean
    $bars: Boolean
    $creator: String!
    $printer: String
  ) {
    createProduct(
      title: $title
      fileName: $fileName
      fileType: $fileType
      file: $file
      message: $message
      label: $label
      bars: $bars
      creator: $creator
      printer: $printer
    ) {
      _id
      title
      message
      imageUrl
      fileName
      fileType
      label
      bars
      creator {
        _id
        name
      }
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
      filename
      filetype
      filesize
      mimetype
      filepath
      parent
      ancestors
      creatorId {
        _id
      }
      iconId {
        _id
      }
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
