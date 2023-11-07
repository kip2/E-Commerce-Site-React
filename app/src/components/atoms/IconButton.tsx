import "./IconButton.css"

type IconButtonProps = {
    icon: React.ReactNode;
    onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
    <button onClick={onClick}>
        {icon}
    </button>

);

export default IconButton;