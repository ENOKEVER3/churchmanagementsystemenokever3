import { CustomObject } from "./GenericTypes";

export interface AddFamilyDetail extends CustomObject {};

export type AddFamilyType = {
  onClose?: (event: any) => void;
  onCancel?: (event: any) => void;
  onContinue?: (info: AddFamilyDetail) => void;
  extras?: AddFamilyDetail;
};
