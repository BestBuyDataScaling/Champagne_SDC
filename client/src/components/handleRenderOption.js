import React from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const handleRenderOption = (option, { inputValue }) => {
  const matches = match(option, inputValue);
  const parts = parse(option, matches);

  const highlightStyle = {
    color: 'blue'
  };

  return (
    <div>
      {parts.map((part, index) => (
        <span key={index} style={part.highlight ? highlightStyle : {}}>
          {part.text}
        </span>
      ))}
    </div>
  );
};

export default handleRenderOption;