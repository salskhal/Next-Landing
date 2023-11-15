import Image from "next/image";

type ButtonProps = {
  title: string;
  type: "button" | "submit";
  icon: string;
  varient: string;
  full?: boolean;
};

const Button = ({ title, type, icon, varient, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${varient} ${full && "w-full"}`}
    >
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}{" "}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
