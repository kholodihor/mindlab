type Props = {
 color: string
  width: number;
  height: number;

};

const ArrowTop = ({color, width, height }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
     fill="currentColor"
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
