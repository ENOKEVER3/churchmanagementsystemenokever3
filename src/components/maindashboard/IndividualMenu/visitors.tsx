import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import GroupHeader from "../IndividualMenu/Header";
import IndividualHeader from "../IndividualMenu/Header";

const visitors: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col pt-0 px-0 pb-20 box-border items-center justify-start  text-left text-5xl text-primary-black-100 font-label-medium-600 overflow-hidden">
      <IndividualHeader activePage={activePage} />
      <table className="min-w-full">
        <thead>
          <tr className="bg-slate-400">
            <th className="text-sm font-label-medium-600 p-2">First Name</th>
            <th className="text-sm font-label-medium-600 p-2">Last Name</th>
            <th className="text-sm font-label-medium-600 p-2">Note</th>
            <th className="text-sm font-label-medium-600 p-2">Groups</th>
            <th className="text-sm font-label-medium-600 p-2">Last Attended</th>
            <th className="text-sm font-label-medium-600 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>{/* Add table rows with data here */}</tbody>
      </table>
    </div>
  );
};

export default visitors;
