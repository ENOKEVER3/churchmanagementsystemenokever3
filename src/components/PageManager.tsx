import React, { createElement, FunctionComponent, useState } from "react";
import { Dfn } from "../globals";
import AttendenceCheckIn from "./maindashboard/AttendenceCheckIn";
import Forms from "./maindashboard/Forms";
import Group from "./maindashboard/Group";
import Interaction from "./maindashboard/InteractionMenu/Interaction";
import MassContact from "./maindashboard/Masscontact";
import MyOutstanding from "./maindashboard/InteractionMenu/MyOutstanding";
import { PageLayout, LocalNavigator } from "../types/InteractionTypes";
import Outstanding from "./maindashboard/InteractionMenu/Outstanding";
import Completed from "./maindashboard/InteractionMenu/Completed";
import Assign from "./maindashboard/InteractionMenu/Assign";
import Log from "./maindashboard/InteractionMenu/Log";
import List from "./maindashboard/GroupMenu/List";
import Add from "./maindashboard/GroupMenu/Add";
import Finder from "./maindashboard/GroupMenu/Finder";
import GroupContact from "./maindashboard/CheckInMenu/GroupContact";
import Status from "./maindashboard/CheckInMenu/Status";
import Individual from "./maindashboard/Individual";
import all from "../components/maindashboard/IndividualMenu/all";
import directory from "../components/maindashboard/IndividualMenu/directory";
import visitors from "../components/maindashboard/IndividualMenu/visitors";

const pageMap: PageLayout = {
  individual:Individual,
  all: all,
  directory: directory,
  visitors: visitors,
  interaction: Interaction,
  group: Group,
  myoutstanding: MyOutstanding,
  outstanding: Outstanding,
  completed: Completed,
  assign: Assign,
  log: Log,
  masscontact: MassContact,
  checkin: AttendenceCheckIn,
  forms: Forms,
  list: List,
  add: Add,
  finder: Finder,
  groupcontact: GroupContact,
  status: Status
};

const PageManager: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  const ActiveComponent = pageMap[activePage];
  return ActiveComponent ?  <ActiveComponent activePage={activePage} /> : <><div>Page is not yet defined</div></>;
};

export default PageManager;
