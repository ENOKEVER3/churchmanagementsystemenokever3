import { subscribe } from "../../event";
import { FunctionComponent, useEffect, useState } from "react";
import GroupHeader from "./GroupMenu/Header";

const Group: FunctionComponent = () => {
  const [activePage, setActivePage] = useState("list");
  useEffect(() => {
    subscribe("interaction", (e) => setActivePage(e.detail.activePage));
  }, [activePage]);
  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col pt-0 px-0 pb-20 box-border items-center justify-start gap-[121px] text-left text-5xl text-primary-black-100 font-label-medium-600 overflow-hidden">
      <GroupHeader activePage={activePage} />
    </div>
  );
};

export default Group;
