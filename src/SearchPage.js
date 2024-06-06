import React, { Component } from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
//import ChannelRow from "./ChannelRow";
// import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow";
import ChannelInfo from "./Channelnfo";
export default class SearchPage extends Component {
  render() {
    return (
      <div className="searchPage">
        <div className="searchPage__filter">
          <TuneIcon />
          <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelInfo />
        <hr />
        <VideoRow
          views="1.5M"
          subs="2M"
          description="It’s the one you AMG fans have been waiting for! "
          timestamp="4 days ago"
          channel="carwow"
          title="🏁New AMG C63 vs BMW M3 vs AUDI RS4: DRAG RACE"
          image="https://img.youtube.com/vi/ujtdXpTaGUk/mqdefault.jpg"
        />
        <VideoRow
          views="45k"
          subs="1.45M"
          description="The Comfort Data Volume is part of the Entertainment Package and is provided by a selected third-party provider"
          timestamp="6 days ago"
          channel="Mercedes-Benz"
          title="How to: activate your Comfort Data Volume"
          image="https://img.youtube.com/vi/qf2s_rGsICQ/mqdefault.jpg"
        />
        <VideoRow
          views="456k"
          subs="1.45M"
          description="The new E-Class offers the latest plug-in hybrid technology with an intelligent operating strategy. Its battery capacity of 19.5 kWh and the drivetrain with intelligent energy 
        recovery enable up to 115 km of electric range and impressive numbers of output and torque."
          timestamp="14 days ago"
          channel="Mercedes-Benz"
          title="The new E-Class Plug-in Hybrid"
          image="https://img.youtube.com/vi/2qB88sQ0Gqk/mqdefault.jpg"
        />
      </div>
    );
  }
}
