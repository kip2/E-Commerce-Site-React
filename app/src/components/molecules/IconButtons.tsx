type IconButtonProps = {
    leftIcon: React.ReactNode;
    onLeftButtonClick?: () => void;
    rightIcon: React.ReactNode;
    onRightButtonClick?: () => void;
}

const IconButtons: React.FC<IconButtonProps> = ({ leftIcon, rightIcon, onLeftButtonClick, onRightButtonClick }) => (
    <>
        <button onClick={onLeftButtonClick}>
            {leftIcon}
        </button>
        <button onClick={onRightButtonClick}>
            {rightIcon}
        </button>
    </>

);

export default IconButtons;