/**
 * React component for rendering a hyperlink with an associated icon.
 * @param {string} url - The URL for the hyperlink.
 * @param {string} iconPath - The path to the icon/image for the hyperlink.
 * @returns {JSX.Element} A React JSX element representing the hyperlink with an icon.
 */
const LinkComponent = ({ url, iconPath}:{url:string, iconPath:string}) => {
  return (
    <a
      className="link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="icon"
        src={iconPath}
        alt={url}
      />
    </a>
  );
};

export default LinkComponent;