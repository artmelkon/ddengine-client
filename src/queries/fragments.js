import { gql } from '@apollo/client';

export const itemFragments = {
  item: gql`
    fragment ItemDetails on Directory {
      _id
      itemname
      itempath
      parent
      parentpath
      ancestors
      isFile
      iconId {
        _id
        name
      }
      creatorId {
        _id
        name
      }
      createdAt
      updatedAt
    }
  `,
};
