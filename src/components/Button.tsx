interface ButtonProps {
    text: string;
    onClick: () => void;

    type: "primary";

    className?: string;
    style?: React.CSSProperties;
}
function Button({ text, onClick, className = "", style, type }: ButtonProps) {
    if (type === "primary") {
        return (
            <button
                className={`
                    bg-primary
                    text-white
                    font-semibold
                    w-full
                    py-2
                    px-4
                    rounded-md
                    ${className}
                `}
                style={style}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}

export default Button;
