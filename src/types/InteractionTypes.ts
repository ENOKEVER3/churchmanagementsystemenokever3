import { FunctionComponent } from "react";

export type LocalNavigator = {
  activePage: string;
  goTo?: (pageID: string) => void;
};

export interface PageLayout {
  [key: string]: FunctionComponent<LocalNavigator>;
}
