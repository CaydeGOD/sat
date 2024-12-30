// FolioFiscalInput.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";


const formatFolio = (value) => {
  const cleanValue = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase(); // Remove invalid characters
  const parts = [
    cleanValue.slice(0, 8),
    cleanValue.slice(8, 12),
    cleanValue.slice(12, 16),
    cleanValue.slice(16, 20),
    cleanValue.slice(20, 36),
  ];
  return parts.filter(Boolean).join("-");
};

const FolioFiscalInput = ({ value, onChange, handleFocus, handleBlur, focused }) => {
  const [setCursorPosition] = useState(0);

  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatFolio(rawValue);
    onChange(formattedValue);

    // Adjust cursor position
    const rawCursorPos = e.target.selectionStart || 0;
    const cleanRaw = rawValue.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    const newCursorPos = Math.min(rawCursorPos, formattedValue.length);
    setCursorPosition(newCursorPos);
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    // Allow navigation keys and editing
    if (["ArrowLeft", "ArrowRight", "Home", "End", "Backspace", "Delete"].includes(key)) return;

    // Block invalid characters
    if (!/^[a-zA-Z0-9]$/.test(key)) e.preventDefault();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const formattedValue = formatFolio(pastedText);
    onChange(formattedValue);
  };

  const handleSelect = (e) => {
    setCursorPosition(e.target.selectionStart || 0);
  };

  return (
    <input
      type="text"
      className={`folio-input ${focused ? "input-focused" : ""}`}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onSelect={handleSelect}
      maxLength={36 + 4} // 36 characters + 4 dashes
      style={{ fontFamily: "monospace" }}
    />
  );
};

FolioFiscalInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  focused: PropTypes.bool,
};

export default FolioFiscalInput;
