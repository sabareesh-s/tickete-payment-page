import React from 'react';

interface ShieldLogo2Props {
  className?: string;
}

const ShieldLogo2: React.FC<ShieldLogo2Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.25 3.625H3.75C3.41848 3.625 3.10054 3.7567 2.86612 3.99112C2.6317 4.22554 2.5 4.54348 2.5 4.875V9.46094C2.5 16.4453 8.42188 18.7656 9.60938 19.1563C9.8631 19.2397 10.1369 19.2397 10.3906 19.1563C11.5781 18.7656 17.5 16.4453 17.5 9.46094V4.875C17.5 4.54348 17.3683 4.22554 17.1339 3.99112C16.8995 3.7567 16.5815 3.625 16.25 3.625V3.625ZM10 17.9688C9.00781 17.6406 4.35156 15.8125 3.80469 10.5H10V4.875H16.25V9.46094C16.2519 9.80806 16.2336 10.155 16.1953 10.5H10V17.9688Z"
        fill="#1733B6"
      />
    </svg>
  );
};

export default ShieldLogo2;
