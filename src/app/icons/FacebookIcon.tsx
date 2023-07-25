import React from 'react';

interface FacebookIconProps {
  className?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.125 9.99997C18.121 11.985 17.3925 13.9004 16.0763 15.3863C14.76 16.8723 12.9466 17.8267 10.9766 18.0703C10.9326 18.0746 10.8882 18.0698 10.8462 18.0561C10.8042 18.0425 10.7655 18.0203 10.7325 17.9909C10.6994 17.9616 10.6729 17.9257 10.6544 17.8856C10.6359 17.8455 10.6259 17.8019 10.625 17.7578V11.875H12.5C12.5855 11.8751 12.6701 11.8578 12.7486 11.8239C12.8271 11.7901 12.8978 11.7406 12.9564 11.6783C13.0149 11.6161 13.0601 11.5425 13.0891 11.4621C13.1181 11.3817 13.1304 11.2962 13.125 11.2109C13.1112 11.0493 13.0366 10.8989 12.9162 10.7902C12.7959 10.6814 12.6388 10.6224 12.4766 10.625H10.625V8.74997C10.625 8.41845 10.7567 8.1005 10.9911 7.86608C11.2256 7.63166 11.5435 7.49997 11.875 7.49997H13.125C13.2105 7.50013 13.2951 7.48277 13.3736 7.44895C13.4521 7.41512 13.5228 7.36556 13.5814 7.30332C13.6399 7.24108 13.6851 7.16749 13.7141 7.08709C13.7431 7.0067 13.7554 6.92121 13.75 6.83591C13.7362 6.67429 13.6616 6.52394 13.5412 6.41519C13.4209 6.30645 13.2638 6.2474 13.1016 6.24997H11.875C11.212 6.24997 10.5761 6.51336 10.1073 6.9822C9.63841 7.45104 9.37502 8.08693 9.37502 8.74997V10.625H7.50002C7.41455 10.6248 7.32995 10.6422 7.25146 10.676C7.17297 10.7098 7.10225 10.7594 7.04367 10.8216C6.98509 10.8839 6.9399 10.9574 6.91089 11.0378C6.88189 11.1182 6.86967 11.2037 6.87502 11.289C6.88884 11.4506 6.96346 11.601 7.08381 11.7097C7.20415 11.8185 7.36127 11.8775 7.52345 11.875H9.37502V17.7578C9.37524 17.8016 9.36624 17.8449 9.34862 17.8851C9.331 17.9252 9.30514 17.9611 9.27273 17.9906C9.24032 18.02 9.20207 18.0424 9.16047 18.0561C9.11887 18.0698 9.07485 18.0747 9.03127 18.0703C4.90627 17.5703 1.71877 13.9843 1.88283 9.69528C1.97493 7.57714 2.89131 5.5789 4.43637 4.12708C5.98143 2.67526 8.03278 1.88488 10.1525 1.92465C12.2723 1.96441 14.2926 2.83117 15.7821 4.33992C17.2716 5.84866 18.1124 7.87986 18.125 9.99997Z"
        fill="#EBEBEB"
      />
    </svg>
  );
};

export default FacebookIcon;