import React from "react";
import { Query } from "@apollo/client/react/components";

import { GET_ALL_HUBDEVICES } from "../../queries";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Devices = (props) => (
  <Query query={GET_ALL_HUBDEVICES}>
    {({ data, loading, error }) => {
      if (loading) return <LoadingSpinner />;
      if (error) return <p>Error!</p>;
      console.log(data);
      return (
        <ul className={props.dashClasses.devices}>
          {data.getAllDevices.map((device) => (
            <li key={device._id} className={props.dashClasses.device__item}>{device.device}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Devices;
