import IconButton from "../atoms/IconButton"
import "./IconButtons.css"

type IconButtonProps = {
    leftIcon: React.ReactNode;
    onLeftButtonClick?: () => void;
    rightIcon: React.ReactNode;
    onRightButtonClick?: () => void;
}

const IconButtons: React.FC<IconButtonProps> = ({ leftIcon, rightIcon, onLeftButtonClick , onRightButtonClick }) => (
    <div className="icons">
        <IconButton
            icon={leftIcon}
            onClick={onLeftButtonClick}
        />
        <IconButton
            icon={rightIcon}
            onClick={onRightButtonClick}
        />
    </div>
);

export default IconButtons;