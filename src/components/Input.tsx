import Row from "./Row";

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: "text" | "password";
    label: string;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
function Input({
    label,
    onChange,
    value,
    className = "",
    placeholder,
    required = false,
    style,
    type,
}: InputProps) {
    return (
        <div className={`flex flex-col ${className}`} style={style}>
            <Row>
                {required && <span className="text-red-500 mr-2">*</span>}
                <label className="text-text text-sm font-semibold">
                    {label}
                </label>
            </Row>
            <input
                className={`border border-disable rounded-md p-2`}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

export default Input;
