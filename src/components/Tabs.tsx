import Row from "./Row";
import Text from "./Text";

export interface TabItemType {
    key: string;
    label: string;
    text?: string;
    icon?: React.ReactNode;
    tooltip?: string;
    disabled?: boolean;
}

interface TabsComponentProps {
    items: TabItemType[];
    activeKey: string;
    onChange: (activeKey: string) => void;

    className?: string;
}

function TabsComponent(props: TabsComponentProps) {
    const { items, activeKey, onChange, className = "" } = props;

    return (
        <div
            className={`
                    flex
                    ${className}
                `}
        >
            {items.map((item, index) => {
                const isActive = activeKey === item.key;
                return (
                    <div
                        key={index}
                        style={{
                            borderBottom: isActive
                                ? `2px solid #1576fe`
                                : "2px solid transparent",
                            marginRight:
                                index !== items.length - 1 ? "16px" : "0px",
                        }}
                        onClick={() => {
                            if (!item.disabled) onChange(item.key);
                        }}
                    >
                        <Row justifyContent="center">
                            {item.icon && (
                                <div
                                    className={`
                                            ${
                                                isActive
                                                    ? "text-secondary"
                                                    : "text-text"
                                            }    
                                        `}
                                >
                                    {item.icon}
                                </div>
                            )}
                            <Text
                                text={item.label}
                                type="title"
                                className={`
                                    ${
                                        item.disabled
                                            ? "text-disable cursor-default"
                                            : isActive
                                            ? "text-secondary cursor-pointer"
                                            : "text-text cursor-pointer"
                                    }    
                                `}
                            />
                        </Row>
                        {/* {isActive && (
                            <div className="tab-content">{item.children}</div>
                        )} */}
                    </div>
                );
            })}
        </div>
    );
}

export default TabsComponent;
