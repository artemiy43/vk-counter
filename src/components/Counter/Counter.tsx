import "./Counter.css";

interface ICounter {
  varient: "primary" | "secondary";
  size: number;
  stroke?: boolean;
  quantity?: string | number;
  pulse?: boolean;
}

function Counter({
  varient,
  size,
  stroke = false,
  quantity = 3,
  pulse = false,
}: ICounter) {
  function getPulseClass(
    pulse: boolean,
    size: number,
    varient: string
  ): string {
    if (pulse && size == 8 && varient == "primary") return "pulse_8_primary";
    else if (pulse && size == 8 && varient == "secondary")
      return "pulse_8_secondary";
    else if (pulse && size == 12 && varient == "primary")
      return "pulse_12_primary";
    else if (pulse && size == 12 && varient == "secondary")
      return "pulse_12_secondary";
    else return "no_pulse";
  }

  function getSizeClass(size: number) {
    return `size_${size}`;
  }

  function getStrokeClass(stroke: boolean, size: number) {
    if (stroke && size == 8) return `stroke_1`;
    else if (stroke && (size == 12 || size == 16 || size == 20))
      return `stroke_2`;
    else if (stroke && size == 24) return `stroke_3`;
    else return "";
  }

  function getQuantity(quantity: string | number) {
    if (size !== 8 && size !== 12)
      if (typeof quantity == "string")
        return quantity.length > 3 ? quantity.substring(0, 3) : quantity;
      else if (typeof quantity == "number")
        return quantity > 99 ? "99+" : quantity;
      else return "";
  }

  function getWidth(quantity: string | number) {
    if (size !== 8 && size !== 12)
      if (typeof quantity == "string")
        return quantity.length > 1 ? "contentBox" : "";
      else if (typeof quantity == "number")
        return quantity > 9 ? "contentBox" : "";
      else return "";
  }

  function getColor(varient: string) {
    return "counter__" + varient;
  }

  function getColorStroke(varient: string) {
    return "counter__stroke_" + varient;
  }

  return (
    <div
      className={`counter ${getColor(varient)} ${getSizeClass(size)} ${getWidth(
        quantity
      )}`}
    >
      <div
        className={`${getStrokeClass(stroke, size)} ${getColorStroke(
          varient
        )} counter__stroke`}
      ></div>
      <div className={`counter__text`}>{getQuantity(quantity)}</div>
      <div className={`pulse one ${getPulseClass(pulse, size, varient)}`}></div>
      <div className={`pulse two ${getPulseClass(pulse, size, varient)}`}></div>
    </div>
  );
}

export default Counter;
