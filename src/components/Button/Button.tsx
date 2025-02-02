import "./Button.css";
import Counter from "../Counter/Counter";
import { useEffect, useRef, useState } from "react";
// import loader from "../../assets/loader.svg";
// import loader_p from "../../assets/loader_p.png";
import loader_primary from "../../assets/loader_primary.png";
import loader_secondary from "../../assets/loader_secondary.png";

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

  function getLoaderSizeClass(size: number) {
    return `button__loader_size_${size}`;
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

  function getBackgroundLayout() {
    return varient === "primary"
      ? "button__overlay_primary"
      : "button__overlay_secondary";
  }

  function getColorLoader() {
    return varient === "primary"
      ? "button__loader_primary"
      : "button__loader_secondary";
  }

  return (
    <button
      ref={buttonRef}
      className={`button ${varient} ${getSizeClass(
        size.buttonSize
      )} ${getRadiusClass(size.buttonSize)} ${
        buttonState === "pressed" ? "button_pressed" : ""
      } ${buttonState === "enabled" ? "enabled" : ""}`}
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
        } ${buttonState === "loading" ? "button__content_hide" : ""}`}
      >
        <label className="button__label">{children}</label>
        {counter && <Counter size={size.counterSize} varient={varient} />}
      </div>
      <img
        src={varient === "primary" ? loader_primary : loader_secondary}
        alt="loader"
        className={`button__loader ${
          buttonState === "loading" ? "button__loader_show" : ""
        } ${getColorLoader()} ${getLoaderSizeClass(size.buttonSize)}`}
      ></img>
      <div
        className={`shimmer ${
          varient === "primary" ? "shimmer_primary" : "shimmer_secondary"
        } ${buttonState === "loading" ? "shimmer_show" : ""}`}
      ></div>
    </button>
  );
}

export default Button;
