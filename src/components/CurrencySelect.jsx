import Select from "react-select";

import { currencyOptions } from "../utils/currencies";
import { selectStyles } from "../utils/selectStyles";

function CurrencySelect({
  label,
  value,
  onChange,
}) {
  const inputId = `${label.toLowerCase()}-currency`;

  return (
    <div className="currency-select">
      <label htmlFor={inputId}>
        {label}
      </label>

      <Select
        inputId={inputId}
        options={currencyOptions}
        value={currencyOptions.find(
          (option) => option.value === value
        )}
        onChange={(option) =>
          onChange(option.value)
        }
        styles={selectStyles}
        isSearchable
        isClearable={false}
      />
    </div>
  );
}

export default CurrencySelect;