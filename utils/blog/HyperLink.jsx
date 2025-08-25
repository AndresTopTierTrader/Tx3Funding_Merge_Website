import React from 'react';

const HyperLink = ({ text, links }) => {
  const processText = () => {
    let result = [];
    let lastIndex = 0;

    links.forEach(({ phrase, link }) => {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
      let match;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          result.push(text.slice(lastIndex, match.index));
        }
        result.push(
          <a
            key={match.index}
            href={link}
            className="underline"
          >
            {match[0]}
          </a>
        );
        lastIndex = regex.lastIndex;
      }
    });

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }

    return result;
  };

  return <div className="text-slate-300">{processText()}</div>;
};

export default HyperLink;