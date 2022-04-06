import { gql } from '@apollo/client';

// export const productFragments = {
//   product: gql`
//     fragment CompleteProduct on Product {
//       _id
//       title
//       imageUrl
//       fileName
//       message
//       label
//       bars
//       creator {
//         name
//       }
//     }
//   `,
// };

export const itemFragments = {
  item: gql`
    fragment itemDetails on FileManager {
      _id
      itemname
      itempath
      parent
      ancestors
      isFileManager
      isFile
      iconId
      creatorId
      createdAt
      updatedAt
    }
  `,
};
