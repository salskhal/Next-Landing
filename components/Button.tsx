import Image from "next/image";

type ButtonProps = {
  title: string;
  type: "button" | "submit";
  icon: string;
  varient: string;
};

const Button = ({ title, type, icon, varient }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${varient}`}
    >
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}{" "}
      <label>{title}</label>
    </button>
  );
};

export default Button;
