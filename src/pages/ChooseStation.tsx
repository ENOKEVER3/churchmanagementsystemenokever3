import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddFamilyMain from "../components/AddFamilyMain";
import AddFamilyTemplate from "../components/AddFamilyTemplate";
import PortalPopup from "../components/PortalPopup";
import { AddFamilyDetail } from "../types/AddFamilyTemplateTypes";
import { CustomObject } from "../types/GenericTypes";
import AddVisitor from "../components/AddVisitor";
import CustomInputField from "../components/basic/CustomInputField";

const ChooseStation: FunctionComponent = () => {
  const { state } = useLocation();
  const [isPopupOpen, setPopupOpen] = useState<CustomObject>({
    familyTemplate: state?.familyTemplate,
    familyVisitor: state?.familyVisitor,
  });
  const [templateExtras, setExtras] = useState<AddFamilyDetail>(
    state?.member ?? {}
  );
  const [family, updateFamily] = useState<CustomObject>(
    state?.allMembers ?? {}
  );

  const navigate = useNavigate();
  const onBackButtonClick = useCallback(() => navigate("/maininteraction"), []);
  const addFamilyMember = useCallback(
    (member: CustomObject) => {
      const selection = member.extension === "child" ? "children" : "visitors";
      if (member.extension === "child" || member.extension === "visitor")
        updateFamily({
          ...family,
          [selection]: family?.[selection]
            ? family?.[selection].concat([member])
            : [member],
        });
      else updateFamily({ ...family, [member.extension]: member });
    },
    [templateExtras, family]
  );

  const replaceOrInsertMember = useCallback(
    (family: CustomObject, replacement: CustomObject) => {
      const key = replacement.extension === "child" ? "children" : "visitors";
      if (!family[key]) {
        family[key] = [replacement];
      } else {
        const index = family[key].findIndex(
          (current: CustomObject) => current.id === replacement.id
        );
        if (index == -1) family[key].push(replacement);
        else family[key][index] = replacement;
      }
      updateFamily(family);
    },
    [family]
  );

  const processTemplateContinuation = useCallback(
    (member: AddFamilyDetail) => {
      // console.log("allMembers: ", family);
      if (member.extension === "child" || member.extension === "visitor") {
        replaceOrInsertMember(family, member);
      } else addFamilyMember(member);
      setExtras({});
      setPopupOpen({ ...isPopupOpen, familyTemplate: false, familyMain: true });
    },
    [isPopupOpen, family]
  );
  const processVisitorContinuation = useCallback(
    (member: AddFamilyDetail) => {
      // console.log("allMembers: ", family);
      if (member.extension === "child" || member.extension === "visitor") {
        replaceOrInsertMember(family, member);
      } else addFamilyMember(member);
      setExtras({});
      setPopupOpen({ ...isPopupOpen, familyVisitor: false, familyMain: true });
    },
    [isPopupOpen, family]
  );
  const processMainContinuation = useCallback(
    (info: AddFamilyDetail) => {
      switch (info.extension) {
        case "owner":
        case "child":
        case "spouse":
          setExtras({
            extension: info.extension,
          });
          setPopupOpen({
            ...isPopupOpen,
            familyTemplate: true,
            familyMain: false,
          });
          break;
        case "visitor":
          setExtras({
            extension: info.extension,
          });
          setPopupOpen({
            ...isPopupOpen,
            AddFamilyTemplate: false,
            familyMain: false,
            familyVisitor: true,
          });
          break;
      }
    },
    [templateExtras, isPopupOpen]
  );

  const onMainContinuationEditMemberActivated = useCallback(
    (member: AddFamilyDetail) => {
      setExtras(member);
      const isVisitor = member.extension === "visitor";
      setPopupOpen({
        ...isPopupOpen,
        familyMain: false,
        familyTemplate: !isVisitor,
        familyVisitor: isVisitor,
      });
    },
    [templateExtras]
  );

  return (
    <>
      <div className="relative [background:linear-gradient(#fff,_#fff),_#f0f0f2] w-full overflow-hidden flex flex-col py-[84px] px-[67px] box-border items-start justify-start gap-[40px] text-left text-5xl text-primary-black-100 font-label-medium-600">
        <button
          className="cursor-pointer [border:none] bg-[transparent] text-base font-semibold font-public-sans flex flex-row p-2.5 items-center justify-start gap-[8px]"
          onClick={onBackButtonClick}
        >
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="assets/images/arrow-left.svg"
          />
          <div className="relative font-semibold text-3xl">Back</div>
        </button>
        <div className="self-stretch flex flex-col py-0 pr-0 pl-[60px] box-border items-start justify-start max-w-[1010px] text-center">
          <div className="self-stretch rounded-lg bg-night-ghost-text box-border h-[273px] flex flex-col p-6 items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
            <div className="relative font-semibold">Choose Station</div>
            <div className="w-full flex flex-col gap-[15px]">
              <CustomInputField
                heading=""
                placeholder="9453"
                errorMessage="The result is not found"
                inputFormatAcceptable={(input) => /^\d+$/.test(input)}
              />
            </div>
            <button
              className="cursor-pointer [border:none] py-[18px] pr-[29px] pl-[30px] bg-royalblue-100 rounded-lg w-[300px] flex flex-row box-border items-center justify-center"
              onClick={() => {
                const hasFamily = Object.keys(family).length !== 0;
                setPopupOpen({
                  ...isPopupOpen,
                  familyTemplate: !hasFamily,
                  familyMain: hasFamily,
                });
              }}
            >
              <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center text-night-ghost-text">
                Add family
              </div>
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen?.familyTemplate && (
        <PortalPopup>
          <AddFamilyTemplate
            onClose={(e) => {
              e.preventDefault();
              setPopupOpen({
                ...isPopupOpen,
                familyTemplate: false,
                // if AddFamilyMainPopup dialog has been originally activated so
                // reopen it.
                familyMain: Object.keys(family).length !== 0,
              });
            }}
            onCancel={(e) => {
              e.preventDefault();
              setPopupOpen({
                ...isPopupOpen,
                familyTemplate: false,
                // if AddFamilyMainPopup dialog has been originally activated so
                // reopen it.
                familyMain: Object.keys(family).length !== 0,
              });
            }}
            extras={templateExtras}
            onContinue={processTemplateContinuation}
          />
        </PortalPopup>
      )}
      {isPopupOpen?.familyMain && (
        <PortalPopup>
          <AddFamilyMain
            onClose={() => setPopupOpen({ ...isPopupOpen, familyMain: false })}
            allMembers={family}
            onEdit={onMainContinuationEditMemberActivated}
            onContinue={processMainContinuation}
          />
        </PortalPopup>
      )}
      {isPopupOpen?.familyVisitor && (
        <PortalPopup>
          <AddVisitor
            onClose={() =>
              setPopupOpen({
                ...isPopupOpen,
                familyVisitor: false,
                familyMain: true,
              })
            }
            onCancel={(e) => {
              e.preventDefault();
              setPopupOpen({
                ...isPopupOpen,
                familyVisitor: false,
                // if AddFamilyMainPopup dialog has been originally activated so
                // reopen it.
                familyMain:
                  Object.entries(family).map(
                    ([__, member], _) => member.visitors
                  ).length !== 0,
              });
            }}
            extras={templateExtras}
            onContinue={processVisitorContinuation}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default ChooseStation;
