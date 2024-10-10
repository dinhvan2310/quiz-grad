import Row from "./Row";
import Text from "./Text";

interface CheckBoxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
    className?: string;
}
function CheckBox({ checked, onChange, label, className = "" }: CheckBoxProps) {
    return (
        <Row alignItems="center">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="mr-2"
            />
            <Text text={label} type="paragraph" className={className} />
        </Row>
    );
}

export default CheckBox;
