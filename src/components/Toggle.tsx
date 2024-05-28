import { useState } from "react";

interface ToggleProps {
  initialState: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ initialState }) => {
  const [isOn, setIsOn] = useState<boolean>(initialState);

  const handleClick = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <button onClick={handleClick}>{isOn ? "OFF" : "ON"}</button>
    </>
  );
};

export default Toggle;
