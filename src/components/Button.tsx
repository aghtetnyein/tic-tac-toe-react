interface IButtonProps {
  label: string;
  bgColor: string;
  bgHoverColor: string;
  onClick: () => void;
}

const Button = ({ label, bgColor, bgHoverColor, onClick }: IButtonProps) => {
  return (
    <button
      className={`w-full h-[3rem] rounded-md ${bgColor} ${bgHoverColor} uppercase text-[0.8rem] font-black`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
