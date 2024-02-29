import React from 'react';
/**
 * React component for rendering a hyperlink with an associated icon.
 * @param {string} url - The URL for the hyperlink.
 * @param {string} iconPath - The path to the icon/image for the hyperlink.
 * @returns {JSX.Element} A React JSX element representing the hyperlink with an icon.
 */
const LinkComponent = ({ url, iconPath}:{url:string, iconPath:string}) => {
  const [iconSize, setIconSize] = React.useState('8vw');
  const [linkMargin, setLinkMargin] = React.useState('1vw 6vw 1vw 6vw');

  const handleMouseEnter = (e:any) => {
    setIconSize('10vw');
    setLinkMargin('0vw 5vw 0vw 5vw');
    
  };  

  const handleMouseLeave = (e:any) => {
    setIconSize('8vw');
    setLinkMargin('1vw 6vw 1vw 6vw');
  };  
  return (
    <a
      className="link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        margin:linkMargin
      }}
    >
      <img
        className="icon"
        src={iconPath}
        alt={url}
        style={{
          width: iconSize,
          height: iconSize
        }}
      />
    </a>
  );
};

export default LinkComponent;