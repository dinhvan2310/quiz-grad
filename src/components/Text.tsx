interface TextProps {
    text: string;
    type: "title" | "paragraph" | "logo" | "link";

    className?: string;
    style?: React.CSSProperties;

    // link props
    onPress?: () => void;
}
function Text({ text, type, className = "", style, onPress }: TextProps) {
    if (type === "title") {
        return (
            <p
                className={`
                    text-lg
                    font-bold
                    ${className}    
                `}
                style={style}
            >
                {text}
            </p>
        );
    }
    if (type === "paragraph") {
        return (
            <p
                className={`
                    text-base
                    text-paragraph
                    ${className}
                `}
                style={style}
            >
                {text}
            </p>
        );
    }

    if (type === "logo") {
        return (
            <p
                className={`
                    text-3xl
                    font-bold
                    ${className}   
                `}
                style={style}
            >
                {text}
            </p>
        );
    }
    if (type === "link") {
        return (
            <p
                onClick={onPress}
                className={`
                    text-base
                    text-link
                    cursor-pointer
                    ${className}
                `}
                style={style}
            >
                {text}
            </p>
        );
    }
}

export default Text;
