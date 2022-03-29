import { Fragment } from "react";

import UserInfo from "../components/Profile/UserInfo.component";
import UserProducts from '../components/Profile/UserProducts.component';

const ProfilePage = (props) => {

  return (
    <Fragment>
      <UserInfo />
      {/* <UserProducts /> */}
    </Fragment>
  );
};
export default ProfilePage;
