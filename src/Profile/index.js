import { Fragment } from "react";

import UserInfo from "./UserInfo.component";
import UserProducts from './UserProducts.component';

const ProfilePage = (props) => {

  return (
    <Fragment>
      <UserInfo />
      {/* <UserProducts /> */}
    </Fragment>
  );
};
export default ProfilePage;
