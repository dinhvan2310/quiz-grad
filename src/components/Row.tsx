interface RowProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    justifyContent?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-evenly";
    alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
    className?: string;
}

function Row({
    children,
    style,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    className = "",
}: RowProps) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent,
                alignItems,
                ...style,
            }}
            className={`${className}`}
        >
            {children}
        </div>
    );
}

export default Row;
