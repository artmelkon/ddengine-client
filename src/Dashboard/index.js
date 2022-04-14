import {useContext} from "react";

import { AuthContext } from "../store/auth-context";
// import UserInfo from '../components/Profile/UserInfo.component';
// import UserProducts from "../components/Profile/UserProducts.component";
// import Products from '../components/Product/Products.component';
// import Devices from '../components/Product/Devices.component';

// import styles from '../assets/scss/style.module.scss';
import classes from "./index.module.scss";


// const Dashboard = ({ session }) => (
//   <div className={classes.app}>
//     <UserInfo session={session} />
//     {console.log("session dashboard ", session)}
//     {session.getCurrentUser.isAdmin && <Products creator={session.getCurrentUser._id} />}
//     {!session.getCurrentUser.isAdmin && <UserProducts creator={session.getCurrentUser._id} />}
//   </div>
// );

const Dashboard = (props) => {
  const authCtx = useContext(AuthContext);


  return (
    <div>
      DASHBOARD PAGE
    </div>
  )
}

export default Dashboard;
