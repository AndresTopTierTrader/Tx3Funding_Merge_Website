import React from 'react'

function BoldBeforeComa({ inputText, prefix }) {
    const [firstPart, secondPart] = inputText.split(': ');
    return (
      <div className="text-base">
        <span className="font-semibold text-base">{prefix}{firstPart}</span>
        <span className="text-base">: {secondPart}</span>
      </div>
    );
}

export default BoldBeforeComa
