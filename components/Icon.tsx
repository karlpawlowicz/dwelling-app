import { FC } from 'react';

interface Props {
  type: string;
}

const Icon: FC<Props> = ({ type }) => {
  return type === 'logo' ? (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.266602 11.2082V23.4562C0.266602 23.7565 0.510072 24 0.810408 24H24.9561C25.2565 24 25.5 23.7565 25.5 23.4562V11.5083C25.5 11.3051 25.4431 11.1061 25.3358 10.9336L18.8392 0.492859L13.0523 9.87483C12.5154 10.7372 11.5714 11.2082 10.5555 11.2082H0.266602Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8392 0.492859L13.0523 9.87476C12.5153 10.7371 11.5714 11.2067 10.5555 11.2067H0.266815L4.78692 3.483C4.94645 3.21041 5.2166 3.02063 5.52714 2.96299L18.8392 0.492859Z"
        fill="black"
      />
    </svg>
  ) : type === 'remove' ? (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.07149 0.820007L4.35723 1.53427H0.785889V2.96281H12.2142V1.53427H8.64283L7.92856 0.820007H5.07149ZM1.50016 4.39134V13.6768C1.50016 14.4625 2.143 15.1054 2.92869 15.1054H10.0714C10.8571 15.1054 11.4999 14.4625 11.4999 13.6768V4.39134H1.50016ZM3.64296 5.81988H5.07149V13.6768H3.64296V5.81988ZM7.92856 5.81988H9.3571V13.6768H7.92856V5.81988Z"
        fill="black"
      />
    </svg>
  ) : null;
};

export default Icon;
