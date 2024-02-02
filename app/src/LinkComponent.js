const LinkComponent = ({ url, iconPath}) => {
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