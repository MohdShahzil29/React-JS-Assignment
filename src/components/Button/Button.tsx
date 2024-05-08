import React from 'react';

interface ButtonProps {
  handleClick: () => void;
  btnName: string;
  classStyle?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<ButtonProps> = ({ handleClick, icon: Icon, btnName, classStyle }) => {
  return (
    <div>
      <button onClick={handleClick} className={`${classStyle} text-center flex gap-2 items-center justify-center`}>
        {btnName}
        {Icon && <Icon className="mt-1" />}
      </button>
    </div>
  );
}

export default Button;