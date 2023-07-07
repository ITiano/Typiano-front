import ArrowDownIcon from "public/icons/ArrowDownIcon";
import UserIcon from "public/icons/UserIcon";
import React, { useState } from "react";
import ActivityModal from "./ActivityModal";
import HamburgerMenu from "./HamburgerMenu";
import { useAuth } from "src/context/AuthContextProvider";
import Link from "next/link";
import Spinner from "@components/utils/Spinner";
import routes from "@routes/routes";

const UserProfile = ({ navItems }) => {
  const [user] = useAuth();
  const [OpenModal, setOpenModal] = useState(false);

  const handleBlur = (e) => !e.currentTarget.contains(e.relatedTarget) && setOpenModal(false);

  return (
    <div className="flex-end-center gap-1 min-w-[100px] h-[40px]">
      {user === "" ? (
        <div className="centering w-full ">
          <Spinner />
        </div>
      ) : user === null ? (
        <Link href="/" className="btn black-btn !py-1.5 !text-sm">
          Register
        </Link>
      ) : (
        <>
          <button onBlur={handleBlur} className="relative">
            <span onClick={() => setOpenModal(!OpenModal)}>
              <ArrowDownIcon className={`${OpenModal && "rotate-180"} transition-all duration-500`} />
            </span>
            <ActivityModal open={OpenModal} />
          </button>
          <Link href={routes.profile.path}>
            <UserIcon className="w-10" />
          </Link>
          <HamburgerMenu navItems={navItems} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
