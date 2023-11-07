import IconButton from "../atoms/IconButton";

type IconButtonProps = {
    leftIcon: React.ReactNode;
    onLeftButtonClick?: () => void;
    rightIcon: React.ReactNode;
    onRightButtonClick?: () => void;
}

const IconButtons: React.FC<IconButtonProps> = ({ leftIcon, rightIcon, onLeftButtonClick, onRightButtonClick }) => (
    <>
        <IconButton
            icon={leftIcon}
            onClick={onLeftButtonClick}
        />
        <IconButton
            icon={rightIcon}
            onClick={onRightButtonClick}
        />
    </>
);

export default IconButtons;