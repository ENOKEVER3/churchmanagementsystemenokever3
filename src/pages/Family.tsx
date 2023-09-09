import { FunctionComponent, useState, useCallback, useEffect } from "react";
import ManageBarcode from "../components/ManageBarcode";
import PortalPopup from "../components/PortalPopup";
import AddVisitor from "../components/AddVisitor";
import LabelSettings from "../components/LabelSettings";
import { useLocation, useNavigate } from "react-router-dom";
import { AddFamilyDetail } from "../types/AddFamilyTemplateTypes";
import { generateUUID } from "../globals";

const Family: FunctionComponent = () => {
  const [isManageBarcodePopupOpen, setManageBarcodePopupOpen] = useState(false);
  const [isAddVisitorPopupOpen, setAddVisitorPopupOpen] = useState(false);
  const [isLabelSettingsPopupOpen, setLabelSettingsPopupOpen] = useState(false);
  const [barcodePackage, setBarcodePackage] = useState<AddFamilyDetail>({});
  const { state } = useLocation();
  const navigate = useNavigate();
  const [members, setMembers] = useState<Array<AddFamilyDetail>>([]);

  useEffect(() => {
    if (state && state.members) setMembers(state.members);
    // console.log(state);
  });

  const closeManageBarcodePopup = useCallback(() => {
    setManageBarcodePopupOpen(false);
  }, []);

  const closeAddVisitorPopup = useCallback(() => {
    setAddVisitorPopupOpen(false);
  }, []);

  const openLabelSettingsPopup = useCallback(() => {
    setLabelSettingsPopupOpen(true);
  }, []);

  const closeLabelSettingsPopup = useCallback(() => {
    setLabelSettingsPopupOpen(false);
  }, []);

  const reFormat = (family: Array<AddFamilyDetail>) => {
    const result: AddFamilyDetail = {};
    return family.reduce((members, member) => {
      if (member.extension === "child")
        return {
          ...members,
          children: members?.children
            ? [member].concat(members?.children)
            : [member],
        };
      if (member.extension === "visitor")
        return {
          ...members,
          visitors: members?.visitors
            ? [member].concat(members?.visitors)
            : [member],
        };
      return { ...members, [member.extension]: member };
    }, result);
  };

  return (
    <>
      <div
        className="relative bg-whitesmoke-200 w-full ov￼
erflow-hidden flex flex-col py-[84px] pr-32 pl-0 box-border items-start justify-start text-center text-5xl text-primary-black-100 font-label-medium-600 min-h-[100vh]"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[62px]">
          <button
            className=" [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-start gap-[8px]"
            onClick={(e) => navigate("/choosestation")}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="assets/images/arrow-left.svg"
            />
            <div className="relative text-5xl font-semibold font-label-medium-600 text-primary-black-100 text-left">
              Back
            </div>
          </button>
          <div className="self-stretch flex flex-row py-0 pr-0 pl-[98px] items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start gap-[104px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[76px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[24px]">
                    <div className="relative font-semibold">Manage Barcode</div>
                    <div className="flex-1 h-12 flex flex-row py-0 pr-[75px] pl-0 box-border items-center justify-end text-base text-night-ghost-text">
                      {/* <div
                        className="rounded-lg bg-royalblue-100 box-border w-[202px] h-[50px] flex flex-row items-center justify-center cursor-pointer border-[1px] border-solid border-royalblue-100"
                        onClick={openManageBarcodePopup}
                      >
                        <div className="relative font-semibold">
                          Manage Barcode
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[24px] text-right text-base font-public-sans">
                    {members.map((member) => {
                      const avatar =
                        member?.avatar ?? require("assets/images/avatar.png");
                      // console.log(avatar);
                      return (
                        <div
                          key={generateUUID()}
                          className="rounded-3xs bg-night-ghost-text w-[400px] h-[106px] flex flex-row py-[21px] px-[17px] box-border items-center justify-between"
                        >
                          <div className="flex flex-row items-center justify-start gap-[14px]">
                            <button
                              className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-81xl w-[40px] h-[50px] overflow-hidden shrink-0 bg-cover bg-no-repeat bg-[top]"
                              style={{ backgroundImage: `url(${avatar})` }}
                            />
                            <div className="relative font-medium">
                              {member?.fullname ?? ""}
                            </div>
                            <button
                              className="[border:none] p-0 bg-[transparent] flex flex-row items-center justify-center w-4 h-4 bg-[url(assets/images/edit-blue.svg)]"
                              onClick={() => {
                                navigate("/choosestation", {
                                  state: {
                                    familyTemplate:
                                      member?.extension !== "visitor",
                                    familyVisitor:
                                      member?.extension === "visitor",
                                    member: member,
                                    allMembers: reFormat(members),
                                  },
                                });
                              }}
                            />
                          </div>
                          <div className=" [border:none] p-0 bg-[transparent] flex flex-col items-end justify-start gap-[23px]">
                            <button
                              className="[border:none] relative w-6 h-6 bg-[url(assets/images/modify-gray.svg)]"
                              onClick={() => {
                                setBarcodePackage(member);
                                setManageBarcodePopupOpen(true);
                              }}
                            />
                            <div className=" p-0 bg-royalblue-100 rounded-lg box-border w-[136px] h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100">
                              <button className="bg-[transparent] relative text-sm font-semibold font-label-medium-600 text-night-ghost-text text-center">
                                Choose group
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[33px]">
                <button
                  className="cursor-pointer p-0 bg-night-ghost-text rounded-lg box-border w-[202px] h-[50px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100"
                  onClick={openLabelSettingsPopup}
                >
                  <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                    Label settings
                  </div>
                </button>
                <button className=" [border:none] p-0 bg-gainsboro-100 rounded-lg w-[200px] h-12 flex flex-row items-center justify-center">
                  <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                    Check-In
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isManageBarcodePopupOpen && (
        <PortalPopup>
          <ManageBarcode
            onContinue={(owner, code) => {
              // console.log("owner", owner, "code: ", code);
            }}
            payload={barcodePackage}
            onClose={closeManageBarcodePopup}
          />
        </PortalPopup>
      )}
      {isAddVisitorPopupOpen && (
        <PortalPopup>
          <AddVisitor onClose={closeAddVisitorPopup} />
        </PortalPopup>
      )}
      {isLabelSettingsPopupOpen && (
        <PortalPopup>
          <LabelSettings onClose={closeLabelSettingsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Family;
