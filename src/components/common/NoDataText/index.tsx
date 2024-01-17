interface NoDataTextProps {
  text: string;
}

const NoDataText = ({ text }: NoDataTextProps) => (
  <div className="py-10 text-center">{text}</div>
);

export default NoDataText;
