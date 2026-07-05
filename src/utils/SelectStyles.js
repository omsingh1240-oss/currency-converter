export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "rgba(255, 255, 255, 0.06)",
    border: state.isFocused
      ? "1px solid #3b82f6"
      : "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "14px",
    minHeight: "54px",
    boxShadow: state.isFocused
      ? "0 0 0 4px rgba(59, 130, 246, 0.18)"
      : "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0 12px",
  }),

  menu: (provided) => ({
    ...provided,
    background: "#111827",
    borderRadius: "14px",
    overflow: "hidden",
    marginTop: "8px",
    border: "1px solid rgba(255,255,255,0.08)",
    zIndex: 999,
  }),

  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? "#2563eb"
      : state.isFocused
      ? "#1e293b"
      : "#111827",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background 0.2s ease",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
    fontWeight: 500,
  }),

  input: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#94a3b8",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#60a5fa" : "#cbd5e1",
    transition: "color 0.2s ease",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};