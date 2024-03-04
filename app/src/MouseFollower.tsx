/**
 * MouseFollower component.
 * @param {Object} position - The position object.
 * @returns {JSX.Element} MouseFollower component JSX.
 */
interface MouseFollowerProps {
  position: {
    x: number;
    y: number;
  };
}
const MouseFollower= ({ position }: MouseFollowerProps) => {
  return (
    <div
      id='flashlight'
      style={{
        left: position.x - 25,
        top: position.y - 25,
      }}
    />
  );
};

export default MouseFollower;