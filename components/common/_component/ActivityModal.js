import ArrowUpIcon from "public/icons/ArrowUpIcon";
import ArrowUpsIcon from "public/icons/ArrowUpsIcon";
import FlashIcon from "public/icons/FlashIcon";
import KeyboardIcon from "public/icons/KeyboardIcon";
import LampChargeIcon from "public/icons/LampChargeIcon";
import SettingIcon from "public/icons/SettingIcon";
import ProgressBar from "./ProgressBar";

const ActivityModal = ({ open }) => {
  const ActivityElementsValues = [
    { title: "Current speed", icon: <FlashIcon />, amount: "20 wpm", extraAmount: undefined },
    { title: "Keyboard Coverage", icon: <KeyboardIcon />, amount: "20%", extraAmount: +13 },
    { title: "Accuracy", icon: <LampChargeIcon />, amount: "20%", extraAmount: -20 },
  ];

  return (
    <div className={`dropdown-container border w-[28rem] py-8 px-6 ${open ? "opacity-100" : "opacity-100"}`}>
      <div className="flex-between-center">
        <p className="font-semibold">Your Activity</p>
        <SettingIcon />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {ActivityElementsValues.map((value) => (
          <ActivityElements value={value} />
        ))}
      </div>
      <p className="font-semibold mt-8 text-left">Time Spent</p>
      <div className="px-5 flex-between-center my-4">
        <p>Over Active Practice Time</p>
        <span className="bg-lightGreen text-white text-xs p-1 font-semibold rounded">14h, 17min</span>
      </div>
      <div className="flex-between-center gap-3 mt-5">
        <ProgressBar width={6} text="Last week" />
        <ProgressBar width={9} text="Today" />
        <ProgressBar width={6} text="This week" />
      </div>
    </div>
  );
};

export default ActivityModal;

const ActivityElements = ({ value }) => (
  <div className="border rounded-lg flex-between-center px-3 py-2">
    <div className="flex-start-center gap-3">
      {value.icon}
      <p className="font-semibold">{value.title}</p>
    </div>
    <div className="flex-start-center gap-3">
      <p className={` flex-start-center ${value.extraAmount > 0 ? "text-lightGreen" : "text-mainRed"}`}>
        {value.extraAmount && (value.extraAmount > 0 ? <ArrowUpIcon /> : <ArrowUpsIcon />)}
        {value.extraAmount}
      </p>
      <p className="font-semibold">{value.amount}</p>
    </div>
  </div>
);
