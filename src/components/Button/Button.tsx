import "./Button.css";
import Counter from "../Counter/Counter";
import { useEffect, useRef, useState } from "react";

interface IButton {
  varient: "primary" | "secondary";
  size: { buttonSize: number; counterSize: number };
  state: "enabled" | "pressed" | "loading" | "disabled";
  counter: boolean;
  focused: boolean;
  children: string;
}

function Button({ varient, size, state, counter, focused, children }: IButton) {
  const [buttonState, setButtonState] = useState(state);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef && buttonRef.current && focused) {
      buttonRef?.current?.focus();
    }
  }, [focused]);

  function getSizeClass(size: number) {
    return `size_${size}`;
  }

  function getGapClass(size: number) {
    return `gap_${size}`;
  }

  function getRadiusClass(size: number) {
    return `radius_${size}`;
  }

  function isDisabled() {
    return buttonState === "disabled" ? true : false;
  }

  //   function getDisabledClass() {
  //     return buttonState === "disabled" ? "disabled" : "";
  //   }

  function getBackgroundLayout() {
    return varient === "primary"
      ? "button__overlay_primary"
      : "button__overlay_secondary";
  }

  return (
    <button
      ref={buttonRef}
      className={`button ${varient} ${getSizeClass(
        size.buttonSize
      )} ${getRadiusClass(size.buttonSize)} ${
        buttonState === "pressed" ? "button_pressed" : ""
      }`}
      onMouseDown={() => setButtonState("pressed")}
      onMouseUp={() => setButtonState("loading")}
      disabled={isDisabled()}
    >
      <div
        className={`button__overlay ${getRadiusClass(
          size.buttonSize
        )} ${getBackgroundLayout()}`}
      ></div>
      <div
        className={`button__content ${getGapClass(size.buttonSize)} ${
          buttonState === "pressed" ? "pressed" : ""
        }`}
      >
        <label className="button__label">{children}</label>
        {counter && <Counter size={size.counterSize} varient={varient} />}
      </div>
      {/* <svg></svg>
      <div className="shimmer"></div> */}
    </button>
  );
}

export default Button;
