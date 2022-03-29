import { gql } from '@apollo/client';

export const productFragments = {
  product: gql`
    fragment CompleteProduct on Product {
      _id
      title
      imageUrl
      fileName
      message
      label
      bars
      creator {
        name
      }
    }
  `,
};

export const fileFragments = {
  file: gql`
    fragment FileDetails on File {
      _id
      filename
      filesize
      filetype
      mimetype
      filepath
      imgUrl
      parent
      ancestors
      createdAt
      updatedAt
    }
  `,
};
