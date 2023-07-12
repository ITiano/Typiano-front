import React from "react";

export const ArrowDownIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.47021 10.74L12.0002 14.26L15.5302 10.74"
      stroke="#1E2229"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftIcon = () => (
  <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z"
      fill="#000410"
    />
  </svg>
);

export const ArrowRightIcon = ({ className }) => {
  return (
    <svg width="21" height="9" className={className} viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3536 4.85355C20.5488 4.65829 20.5488 4.34171 20.3536 4.14645L17.1716 0.964466C16.9763 0.769204 16.6597 0.769204 16.4645 0.964466C16.2692 1.15973 16.2692 1.47631 16.4645 1.67157L19.2929 4.5L16.4645 7.32843C16.2692 7.52369 16.2692 7.84027 16.4645 8.03553C16.6597 8.2308 16.9763 8.2308 17.1716 8.03553L20.3536 4.85355ZM0 5H20V4H0V5Z"
        fill="#000410"
      />
    </svg>
  );
};

export const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0467 6.88001C11.9201 6.88001 11.7934 6.83334 11.6934 6.73334L8.00008 3.04001L4.30674 6.73334C4.11341 6.92667 3.79341 6.92667 3.60008 6.73334C3.40674 6.54001 3.40674 6.22001 3.60008 6.02667L7.64675 1.98001C7.84008 1.78667 8.16008 1.78667 8.35341 1.98001L12.4001 6.02667C12.5934 6.22001 12.5934 6.54001 12.4001 6.73334C12.3067 6.83334 12.1734 6.88001 12.0467 6.88001Z"
      fill="#8FE357"
    />
    <path
      d="M8 14.1667C7.72667 14.1667 7.5 13.94 7.5 13.6667V2.44667C7.5 2.17334 7.72667 1.94667 8 1.94667C8.27333 1.94667 8.5 2.17334 8.5 2.44667V13.6667C8.5 13.94 8.27333 14.1667 8 14.1667Z"
      fill="#8FE357"
    />
  </svg>
);

export const ArrowUpsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.95326 9.12C4.07992 9.12 4.20659 9.16667 4.30659 9.26667L7.99992 12.96L11.6933 9.26667C11.8866 9.07333 12.2066 9.07333 12.3999 9.26667C12.5933 9.46 12.5933 9.78 12.3999 9.97333L8.35325 14.02C8.15992 14.2133 7.83992 14.2133 7.64659 14.02L3.59992 9.97333C3.40659 9.78 3.40659 9.46 3.59992 9.26667C3.69325 9.16667 3.82659 9.12 3.95326 9.12Z"
      fill="#E35757"
    />
    <path
      d="M8 1.83333C8.27333 1.83333 8.5 2.06 8.5 2.33333L8.5 13.5533C8.5 13.8267 8.27333 14.0533 8 14.0533C7.72667 14.0533 7.5 13.8267 7.5 13.5533L7.5 2.33333C7.5 2.06 7.72667 1.83333 8 1.83333Z"
      fill="#E35757"
    />
  </svg>
);

export const AssignImgIcon = ({ className }) => {
  return (
    <svg className={`${className}`} width="28" height="29" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="3.01318" width="43" height="43" rx="21.5" fill="#1E2229" />
      <path
        d="M34.0196 29.7936L30.8896 22.4736C30.3196 21.1336 29.4696 20.3736 28.4996 20.3236C27.5396 20.2736 26.6096 20.9436 25.8996 22.2236L23.9996 25.6336C23.5996 26.3536 23.0296 26.7836 22.4096 26.8336C21.7796 26.8936 21.1496 26.5636 20.6396 25.9136L20.4196 25.6336C19.7096 24.7436 18.8296 24.3136 17.9296 24.4036C17.0296 24.4936 16.2596 25.1136 15.7496 26.1236L14.0196 29.5736C13.3996 30.8236 13.4596 32.2736 14.1896 33.4536C14.9196 34.6336 16.1896 35.3436 17.5796 35.3436H30.3396C31.6796 35.3436 32.9296 34.6736 33.6696 33.5536C34.4296 32.4336 34.5497 31.0236 34.0196 29.7936Z"
        fill="#F5F5F5"
      />
      <path
        d="M18.9698 21.3536C20.8366 21.3536 22.3498 19.8404 22.3498 17.9736C22.3498 16.1069 20.8366 14.5936 18.9698 14.5936C17.1031 14.5936 15.5898 16.1069 15.5898 17.9736C15.5898 19.8404 17.1031 21.3536 18.9698 21.3536Z"
        fill="#F5F5F5"
      />
      <rect x="2.5" y="3.01318" width="43" height="43" rx="21.5" stroke="#F5F5F5" strokeWidth="5" />
    </svg>
  );
};

export const CallingIcon = () => {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.025 13.9443C21.4875 13.9443 21.0625 13.5068 21.0625 12.9818C21.0625 12.5193 20.6 11.5568 19.825 10.7193C19.0625 9.90684 18.225 9.43184 17.525 9.43184C16.9875 9.43184 16.5625 8.99434 16.5625 8.46934C16.5625 7.94434 17 7.50684 17.525 7.50684C18.775 7.50684 20.0875 8.18184 21.2375 9.39434C22.3125 10.5318 23 11.9443 23 12.9693C23 13.5068 22.5625 13.9443 22.025 13.9443Z"
        fill="#292D32"
      />
      <path
        d="M26.5367 13.9443C25.9992 13.9443 25.5742 13.5068 25.5742 12.9818C25.5742 8.54434 21.9617 4.94434 17.5367 4.94434C16.9992 4.94434 16.5742 4.50684 16.5742 3.98184C16.5742 3.45684 16.9992 3.00684 17.5242 3.00684C23.0242 3.00684 27.4992 7.48184 27.4992 12.9818C27.4992 13.5068 27.0617 13.9443 26.5367 13.9443Z"
        fill="#292D32"
      />
      <path
        d="M13.8125 19.1943L11.5 21.5068C11.0125 21.9943 10.2375 21.9943 9.7375 21.5193C9.6 21.3818 9.4625 21.2568 9.325 21.1193C8.0375 19.8193 6.875 18.4568 5.8375 17.0318C4.8125 15.6068 3.9875 14.1818 3.3875 12.7693C2.8 11.3443 2.5 9.98184 2.5 8.68184C2.5 7.83184 2.65 7.01934 2.95 6.26934C3.25 5.50684 3.725 4.80684 4.3875 4.18184C5.1875 3.39434 6.0625 3.00684 6.9875 3.00684C7.3375 3.00684 7.6875 3.08184 8 3.23184C8.325 3.38184 8.6125 3.60684 8.8375 3.93184L11.7375 8.01934C11.9625 8.33184 12.125 8.61934 12.2375 8.89434C12.35 9.15684 12.4125 9.41934 12.4125 9.65684C12.4125 9.95684 12.325 10.2568 12.15 10.5443C11.9875 10.8318 11.75 11.1318 11.45 11.4318L10.5 12.4193C10.3625 12.5568 10.3 12.7193 10.3 12.9193C10.3 13.0193 10.3125 13.1068 10.3375 13.2068C10.375 13.3068 10.4125 13.3818 10.4375 13.4568C10.6625 13.8693 11.05 14.4068 11.6 15.0568C12.1625 15.7068 12.7625 16.3693 13.4125 17.0318C13.5375 17.1568 13.675 17.2818 13.8 17.4068C14.3 17.8943 14.3125 18.6943 13.8125 19.1943Z"
        fill="#292D32"
      />
      <path
        d="M27.4625 23.4194C27.4625 23.7694 27.4 24.1319 27.275 24.4819C27.2375 24.5819 27.2 24.6819 27.15 24.7819C26.9375 25.2319 26.6625 25.6569 26.3 26.0569C25.6875 26.7319 25.0125 27.2194 24.25 27.5319C24.2375 27.5319 24.225 27.5444 24.2125 27.5444C23.475 27.8444 22.675 28.0069 21.8125 28.0069C20.5375 28.0069 19.175 27.7069 17.7375 27.0944C16.3 26.4819 14.8625 25.6569 13.4375 24.6194C12.95 24.2569 12.4625 23.8944 12 23.5069L16.0875 19.4194C16.4375 19.6819 16.75 19.8819 17.0125 20.0194C17.075 20.0444 17.15 20.0819 17.2375 20.1194C17.3375 20.1569 17.4375 20.1694 17.55 20.1694C17.7625 20.1694 17.925 20.0944 18.0625 19.9569L19.0125 19.0194C19.325 18.7069 19.625 18.4694 19.9125 18.3194C20.2 18.1444 20.4875 18.0569 20.8 18.0569C21.0375 18.0569 21.2875 18.1069 21.5625 18.2194C21.8375 18.3319 22.125 18.4944 22.4375 18.7069L26.575 21.6444C26.9 21.8694 27.125 22.1319 27.2625 22.4444C27.3875 22.7569 27.4625 23.0694 27.4625 23.4194Z"
        fill="#292D32"
      />
    </svg>
  );
};

export const CheckIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

export const EmailIcon = () => (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.25 0.375H6.75C3 0.375 0.5 2.25 0.5 6.625V15.375C0.5 19.75 3 21.625 6.75 21.625H19.25C23 21.625 25.5 19.75 25.5 15.375V6.625C25.5 2.25 23 0.375 19.25 0.375ZM19.8375 7.9875L15.925 11.1125C15.1 11.775 14.05 12.1 13 12.1C11.95 12.1 10.8875 11.775 10.075 11.1125L6.1625 7.9875C5.7625 7.6625 5.7 7.0625 6.0125 6.6625C6.3375 6.2625 6.925 6.1875 7.325 6.5125L11.2375 9.6375C12.1875 10.4 13.8 10.4 14.75 9.6375L18.6625 6.5125C19.0625 6.1875 19.6625 6.25 19.975 6.6625C20.3 7.0625 20.2375 7.6625 19.8375 7.9875Z"
      fill="#292D32"
    />
  </svg>
);

export const FlashIcon = () => (
  <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.8495 17.8667H24.6995V5.86667C24.6995 3.06667 23.1829 2.5 21.3329 4.6L19.9995 6.11667L8.7162 18.95C7.1662 20.7 7.8162 22.1333 10.1495 22.1333H15.2995V34.1333C15.2995 36.9333 16.8162 37.5 18.6662 35.4L19.9995 33.8833L31.2829 21.05C32.8329 19.3 32.1829 17.8667 29.8495 17.8667Z"
      fill="#1E2229"
    />
  </svg>
);

export const WarningIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CloseIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_28_493)">
      <path
        d="M23.7658 12.2766C23.7658 11.4609 23.6996 10.6407 23.5585 9.83823H12.2397V14.4592H18.7215C18.4525 15.9496 17.5883 17.268 16.3228 18.1057V21.1041H20.1898C22.4606 19.014 23.7658 15.9275 23.7658 12.2766Z"
        fill="#4285F4"
      />
      <path
        d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9381 20.1945 21.1038L16.3276 18.1055C15.2517 18.8374 13.8627 19.2519 12.2445 19.2519C9.11388 19.2519 6.45946 17.1398 5.50705 14.3002H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
        fill="#34A853"
      />
      <path
        d="M5.50228 14.3005C4.99962 12.8101 4.99962 11.1963 5.50228 9.70596V6.61502H1.51625C-0.185754 10.0058 -0.185754 14.0007 1.51625 17.3914L5.50228 14.3005Z"
        fill="#FBBC04"
      />
      <path
        d="M12.2401 4.74975C13.9509 4.7233 15.6044 5.36706 16.8434 6.54876L20.2695 3.12271C18.1001 1.0856 15.2208 -0.0343744 12.2401 0.000900219C7.7029 0.000900219 3.55371 2.55831 1.5166 6.6149L5.50264 9.70584C6.45064 6.86182 9.10947 4.74975 12.2401 4.74975Z"
        fill="#EA4335"
      />
    </g>
    <defs>
      <clipPath id="clip0_28_493">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const GridIcon = ({ className }) => (
  <svg
    className={`text-gray-800 ${className}`}
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.215 9H1.785C0.51 9 0 9.45176 0 10.5741V13.4259C0 14.5482 0.51 15 1.785 15H15.215C16.49 15 17 14.5482 17 13.4259V10.5741C17 9.45176 16.49 9 15.215 9Z"
      fill="currentColor"
    />
    <path
      d="M15.215 1H1.785C0.51 1 0 1.45176 0 2.57412V5.42588C0 6.54824 0.51 7 1.785 7H15.215C16.49 7 17 6.54824 17 5.42588V2.57412C17 1.45176 16.49 1 15.215 1Z"
      fill="currentColor"
    />
  </svg>
);

export const HideIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_9_57257)">
      <path
        d="M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.6819 3.96914 7.65661 6.06 6.06L17.94 17.94ZM9.9 4.24C10.5883 4.07888 11.2931 3.99834 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19L9.9 4.24Z"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 1L23 23" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_9_57257">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HistoryIcon = ({ className }) => {
  return (
    <svg
      height="21px"
      version="1.1"
      viewBox="0 0 20 21"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <title />
      <desc />
      <defs />
      <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
        <g fill="#000000" id="Core" opacity="0.9" transform="translate(-464.000000, -254.000000)">
          <g id="history" transform="translate(464.000000, 254.500000)">
            <path
              d="M10.5,0 C7,0 3.9,1.9 2.3,4.8 L0,2.5 L0,9 L6.5,9 L3.7,6.2 C5,3.7 7.5,2 10.5,2 C14.6,2 18,5.4 18,9.5 C18,13.6 14.6,17 10.5,17 C7.2,17 4.5,14.9 3.4,12 L1.3,12 C2.4,16 6.1,19 10.5,19 C15.8,19 20,14.7 20,9.5 C20,4.3 15.7,0 10.5,0 L10.5,0 Z M9,5 L9,10.1 L13.7,12.9 L14.5,11.6 L10.5,9.2 L10.5,5 L9,5 L9,5 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const LampChargeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.4329 36.6667C25.3329 36.6667 25.2163 36.65 25.1163 36.6167C21.7663 35.6667 18.2496 35.6667 14.8996 36.6167C14.2829 36.7833 13.6329 36.4333 13.4663 35.8167C13.2829 35.2 13.6496 34.55 14.2663 34.3833C18.0329 33.3167 21.9996 33.3167 25.7663 34.3833C26.3829 34.5667 26.7496 35.2 26.5663 35.8167C26.3996 36.3333 25.9329 36.6667 25.4329 36.6667Z"
      fill="#1E2229"
    />
    <path
      d="M32.0162 10.6C30.2829 7.1 26.9329 4.51667 23.0495 3.66667C18.9829 2.76667 14.8162 3.73334 11.6329 6.3C8.43288 8.85 6.61621 12.6667 6.61621 16.75C6.61621 21.0667 9.19954 25.5833 13.0995 28.2V29.5833C13.0829 30.05 13.0662 30.7667 13.6329 31.35C14.2162 31.95 15.0829 32.0167 15.7662 32.0167H24.3162C25.2162 32.0167 25.8995 31.7667 26.3662 31.3C26.9995 30.65 26.9829 29.8167 26.9662 29.3667V28.2C32.1329 24.7167 35.3829 17.3667 32.0162 10.6ZM22.8662 19.3667L21.0829 22.4667C20.8495 22.8667 20.4329 23.1 19.9995 23.1C19.7829 23.1 19.5662 23.05 19.3829 22.9333C18.7829 22.5833 18.5829 21.8167 18.9162 21.2333L20.3329 18.7667H18.9329C18.0995 18.7667 17.4162 18.4 17.0495 17.7833C16.6829 17.15 16.7162 16.3833 17.1329 15.65L18.9162 12.55C19.2662 11.95 20.0329 11.75 20.6162 12.0833C21.2162 12.4333 21.4162 13.2 21.0829 13.7833L19.6662 16.25H21.0662C21.8995 16.25 22.5829 16.6167 22.9495 17.2333C23.3162 17.8667 23.2829 18.65 22.8662 19.3667Z"
      fill="#1E2229"
    />
  </svg>
);

export const LighteningIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.9095 10.72H14.8195V3.52002C14.8195 1.84002 13.9095 1.50002 12.7995 2.76002L11.9995 3.67002L5.22952 11.37C4.29952 12.42 4.68952 13.28 6.08952 13.28H9.17952V20.48C9.17952 22.16 10.0895 22.5 11.1995 21.24L11.9995 20.33L18.7695 12.63C19.6995 11.58 19.3095 10.72 17.9095 10.72Z"
        fill="white"
      />
    </svg>
  );
};

export const LocationIcon = () => (
  <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.7751 9.06922C21.4626 3.2943 16.4251 0.694336 12.0002 0.694336C12.0002 0.694336 12.0002 0.694336 11.9877 0.694336C7.57527 0.694336 2.52534 3.2818 1.21286 9.05672C-0.249621 15.5066 3.70033 20.9691 7.27528 24.4065C8.60026 25.6815 10.3002 26.319 12.0002 26.319C13.7002 26.319 15.4002 25.6815 16.7126 24.4065C20.2876 20.9691 24.2375 15.5191 22.7751 9.06922ZM12.0002 15.3316C9.82524 15.3316 8.06276 13.5692 8.06276 11.3942C8.06276 9.21922 9.82524 7.45674 12.0002 7.45674C14.1752 7.45674 15.9377 9.21922 15.9377 11.3942C15.9377 13.5692 14.1752 15.3316 12.0002 15.3316Z"
      fill="#292D32"
    />
  </svg>
);

export const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0001 17.35C12.9003 17.35 13.6301 16.6202 13.6301 15.72C13.6301 14.8198 12.9003 14.09 12.0001 14.09C11.0999 14.09 10.3701 14.8198 10.3701 15.72C10.3701 16.6202 11.0999 17.35 12.0001 17.35Z"
      fill="#CECECE"
    />
    <path
      d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
      fill="#CECECE"
    />
  </svg>
);

export const MenuBarIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.32" />
    <path
      d="M29 15.75H11C10.59 15.75 10.25 15.41 10.25 15C10.25 14.59 10.59 14.25 11 14.25H29C29.41 14.25 29.75 14.59 29.75 15C29.75 15.41 29.41 15.75 29 15.75Z"
      fill="#AEAEAE"
    />
    <path
      d="M29 20.75H11C10.59 20.75 10.25 20.41 10.25 20C10.25 19.59 10.59 19.25 11 19.25H29C29.41 19.25 29.75 19.59 29.75 20C29.75 20.41 29.41 20.75 29 20.75Z"
      fill="#AEAEAE"
    />
    <path
      d="M29 25.75H11C10.59 25.75 10.25 25.41 10.25 25C10.25 24.59 10.59 24.25 11 24.25H29C29.41 24.25 29.75 24.59 29.75 25C29.75 25.41 29.41 25.75 29 25.75Z"
      fill="#AEAEAE"
    />
  </svg>
);

export const MoreCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.4"
      d="M2.66683 16C2.66683 23.3638 8.63636 29.3333 16.0002 29.3333C23.364 29.3333 29.3335 23.3638 29.3335 16C29.3335 8.63621 23.364 2.66667 16.0002 2.66667C8.63637 2.66667 2.66683 8.63621 2.66683 16Z"
      fill="white"
    />
    <path
      d="M14.6668 16C14.6668 15.2533 15.2668 14.6667 16.0002 14.6667C16.7335 14.6667 17.3335 15.2667 17.3335 16C17.3335 16.7333 16.7335 17.3333 16.0002 17.3333C15.2668 17.3333 14.6668 16.7467 14.6668 16Z"
      fill="#1E2229"
    />
    <path
      d="M14.6668 21.3333C14.6668 20.5867 15.2668 20 16.0002 20C16.7335 20 17.3335 20.6 17.3335 21.3333C17.3335 22.0667 16.7335 22.6667 16.0002 22.6667C15.2668 22.6667 14.6668 22.08 14.6668 21.3333Z"
      fill="#1E2229"
    />
    <path
      d="M14.6668 10.6667C14.6668 9.91999 15.2668 9.33333 16.0002 9.33333C16.7335 9.33333 17.3335 9.93333 17.3335 10.6667C17.3335 11.4 16.7335 12 16.0002 12C15.2668 12 14.6668 11.4133 14.6668 10.6667Z"
      fill="#1E2229"
    />
  </svg>
);

export const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.9998 0.666672C6.63984 0.666672 0.666504 6.64001 0.666504 14C0.666504 21.36 6.63984 27.3333 13.9998 27.3333C21.3598 27.3333 27.3332 21.36 27.3332 14C27.3332 6.64001 21.3598 0.666672 13.9998 0.666672ZM17.5465 16.3067L15.8398 17.2933L14.1332 18.28C11.9332 19.5467 10.1332 18.5067 10.1332 15.9733V14V12.0267C10.1332 9.48001 11.9332 8.45334 14.1332 9.72001L15.8398 10.7067L17.5465 11.6933C19.7465 12.96 19.7465 15.04 17.5465 16.3067Z"
      fill="#1E2229"
    />
  </svg>
);

export const RowIcon = ({ className }) => (
  <svg
    className={`text-gray-800 ${className}`}
    width="19"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6667 5.68001V2.65334C14.6667 1.71334 14.24 1.33334 13.18 1.33334H10.4867C9.42667 1.33334 9 1.71334 9 2.65334V5.67334C9 6.62001 9.42667 6.99334 10.4867 6.99334H13.18C14.24 7.00001 14.6667 6.62001 14.6667 5.68001Z"
      fill="currentColor"
    />
    <path
      d="M14.6667 13.18V10.4867C14.6667 9.42667 14.24 9 13.18 9H10.4867C9.42667 9 9 9.42667 9 10.4867V13.18C9 14.24 9.42667 14.6667 10.4867 14.6667H13.18C14.24 14.6667 14.6667 14.24 14.6667 13.18Z"
      fill="currentColor"
    />
    <path
      d="M7.00016 5.68001V2.65334C7.00016 1.71334 6.5735 1.33334 5.5135 1.33334H2.82016C1.76016 1.33334 1.3335 1.71334 1.3335 2.65334V5.67334C1.3335 6.62001 1.76016 6.99334 2.82016 6.99334H5.5135C6.5735 7.00001 7.00016 6.62001 7.00016 5.68001Z"
      fill="currentColor"
    />
    <path
      d="M7.00016 13.18V10.4867C7.00016 9.42667 6.5735 9 5.5135 9H2.82016C1.76016 9 1.3335 9.42667 1.3335 10.4867V13.18C1.3335 14.24 1.76016 14.6667 2.82016 14.6667H5.5135C6.5735 14.6667 7.00016 14.24 7.00016 13.18Z"
      fill="currentColor"
    />
  </svg>
);

export const SettingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
      fill="#AEAEAE"
    />
  </svg>
);

export const ShareIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
        stroke="#AEAEAE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
        stroke="#AEAEAE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
        stroke="#AEAEAE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.58984 13.51L15.4198 17.49" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.4098 6.51001L8.58984 10.49" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const ShowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
      stroke="#BDBDBD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#BDBDBD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarIcon = ({ className }) => {
  return (
    <svg
      className={`text-[#FFD42A] ${className}`}
      width="24"
      height="24"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.3586 20.7399L33.9253 25.0124C33.3166 25.5981 32.9032 26.7696 33.0295 27.608L33.7186 32.6155C34.1665 35.8199 32.1796 37.2096 29.3083 35.7165L24.4387 33.1668C23.6232 32.7419 22.2909 32.7648 21.4985 33.2357L17.2375 35.728C13.8724 37.6919 11.8625 36.2104 12.7583 32.4203L14.0102 27.1256C14.2399 26.1609 13.8149 24.8401 13.0914 24.1855L9.0601 20.5447C6.17734 17.9376 6.9813 15.5716 10.8633 15.273L15.7789 14.9055C16.6977 14.8366 17.8117 14.113 18.2367 13.2976L20.7864 8.40493C22.2909 5.54514 24.7143 5.55662 26.1729 8.43938L28.447 12.9415C28.8374 13.6996 29.8252 14.4346 30.6636 14.5609L36.7507 15.5487C40.0354 16.0999 40.759 18.4314 38.3586 20.7399Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.54752 21.7507C16.6042 21.7507 21.5578 14.2473 21.5578 7.74046C21.5578 7.52734 21.5578 7.31518 21.5434 7.10398C22.507 6.40693 23.3389 5.54386 24 4.55518C23.1014 4.95358 22.148 5.21473 21.1718 5.3299C22.1998 4.71459 22.9692 3.74668 23.3366 2.60638C22.3701 3.17999 21.3126 3.58421 20.2099 3.80158C19.4675 3.01216 18.4856 2.48942 17.4162 2.31426C16.3468 2.13911 15.2494 2.32129 14.294 2.83263C13.3385 3.34397 12.5782 4.15595 12.1307 5.14293C11.6833 6.1299 11.5735 7.23684 11.8186 8.29246C9.8609 8.19426 7.94576 7.68549 6.19745 6.79918C4.44915 5.91288 2.90676 4.66884 1.6704 3.14782C1.04073 4.23181 0.847872 5.51505 1.1311 6.73624C1.41433 7.95744 2.15234 9.02477 3.19488 9.72094C2.41123 9.69798 1.64465 9.48657 0.96 9.10462V9.16702C0.960311 10.3039 1.35385 11.4056 2.07387 12.2854C2.79389 13.1652 3.79606 13.7688 4.9104 13.9939C4.18548 14.1916 3.42487 14.2205 2.68704 14.0784C3.00181 15.0567 3.61443 15.9122 4.43924 16.5253C5.26405 17.1384 6.25983 17.4785 7.28736 17.4979C6.26644 18.3004 5.09731 18.8937 3.84687 19.2439C2.59643 19.5941 1.28921 19.6943 0 19.5389C2.25183 20.9839 4.87192 21.7504 7.54752 21.7469"
      fill="#1DA1F2"
    />
  </svg>
);

export const UserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#F5F5F5" />
    <path
      d="M20 10C17.38 10 15.25 12.13 15.25 14.75C15.25 17.32 17.26 19.4 19.88 19.49C19.96 19.48 20.04 19.48 20.1 19.49C20.12 19.49 20.13 19.49 20.15 19.49C20.16 19.49 20.16 19.49 20.17 19.49C22.73 19.4 24.74 17.32 24.75 14.75C24.75 12.13 22.62 10 20 10Z"
      fill="#AEAEAE"
    />
    <path
      d="M25.08 22.15C22.29 20.29 17.74 20.29 14.93 22.15C13.66 23 12.96 24.15 12.96 25.38C12.96 26.61 13.66 27.75 14.92 28.59C16.32 29.53 18.16 30 20 30C21.84 30 23.68 29.53 25.08 28.59C26.34 27.74 27.04 26.6 27.04 25.36C27.03 24.13 26.34 22.99 25.08 22.15Z"
      fill="#AEAEAE"
    />
    <circle cx="20" cy="20" r="18.5" stroke="white" strokeOpacity="0.6" strokeWidth="3" />
  </svg>
);

export const LogOutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#AEAEAE"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  );
};

export const DotsIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-5 h-5 ${className}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
};
