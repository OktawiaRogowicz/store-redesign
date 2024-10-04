import React, { useRef } from "react";
import { NumberInput, NumberInputHandlers } from "@mantine/core";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";

import StyledIconButton from "@/components/StyledIconButton";

import classes from "./StyledNumberInput.module.css";

type StyledNumberInputType = {
  value: number | string;
  onChange: (number) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
};

const StyledNumberInput: React.FunctionComponent<StyledNumberInputType> = ({
  value,
  onChange,
  handleDecrement,
  handleIncrement,
}) => {
  const handlersRef = useRef<NumberInputHandlers>(null);

  return (
    <div className={classes["styled-number-input"]}>
      <StyledIconButton icon={<MdOutlineRemove />} onClick={handleDecrement} />
      <NumberInput
        handlersRef={handlersRef}
        step={1}
        min={0}
        max={15}
        value={value}
        onChange={onChange}
        hideControls
        classNames={{
          root: classes["styled-number-input__root"],
          input: classes["styled-number-input__input"],
        }}
      />
      <StyledIconButton icon={<MdOutlineAdd />} onClick={handleIncrement} />
    </div>
  );
};

export default StyledNumberInput;
