import React, { useState } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const CustomSelect = ({ options, onChange, initialVal }) => {
  const [currentOpt, setCurrentOpt] = useState(initialVal ? initialVal : 0);
  const [value, setValue] = useState(options[currentOpt]);
  const [isOpen, setIsOpen] = useState(false)

  const dropdownListClick = index => {
    setCurrentOpt(index);
    setValue(options[currentOpt].value)
    setIsOpen(!isOpen)
  };

  return (
    <div className="dropdown">
        <button
            className={`btn btn-secondary dropdown-toggle ${isOpen ? "flat-bottom": ""}`}
            type="button"
            id="dropdownMenuButton"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>{options[currentOpt].text}</p>
            {isOpen ? <UpOutlined style={{justifySelf: "flex-end"}} /> : <DownOutlined style={{justifySelf: "flex-end"}} />}
        </button>
        <div className={`dropdown-menu ${isOpen ? "displayed" : "not-displayed"}`} style={{display: "flex", flexDirection: "column", zIndex: "100", position: 'relative', marginBottom: "-100%"}} aria-labelledby="dropdownMenuButton">
            {options.map((value, index) => {
            if(isOpen) return (
                <>
                  <a
                    className={`dropdown-item ${isOpen ? "displayed" : "not-displayed"}`}
                    href="#"
                    onClick={() => {
                      dropdownListClick(index)
                      onChange(value)
                    }}
                    key={index}
                  >
                    {value.text}
                  </a>
                </>
              );
            })}
        </div>
    </div>
    // <select value={value} onChange={handleSelectChange}>
    //   {options.map((option) => (
    //     <option key={option.key} value={option.value}>
    //       {option.text}
    //     </option>
    //   ))}
    // </select>
  );
};

export default CustomSelect;