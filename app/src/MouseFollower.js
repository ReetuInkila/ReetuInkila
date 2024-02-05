const MouseFollower = ({position}) => {
    return (
        <div
            id='flashlight'
            style={{
                left: position.x-200,
                top: position.y-200,
            }}
        />
    );
};
export default MouseFollower;