type Props = {
  color: string;
};

const ArrowTop = ({ color }: Props) => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.534 2.75051L18.534 16.8926M18.534 2.75051L4.39182 2.75051M18.534 2.75051L2.0348 19.2497"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowTop;
