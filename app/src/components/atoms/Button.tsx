type ButtonProps = {
    caption: string
    onButtonClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ caption, onButtonClick }) => {
    return(
        <>
            <button
                onClick={onButtonClick}
            >
                {caption}
            </button>
        </>
    )
}

export default Button 