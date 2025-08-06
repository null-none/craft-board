import { Element, useNode } from "@craftjs/core";

export const LockedCard = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect} style={{ border: "1px dashed gray", padding: 10 }} className="row">
            {children}
        </div>
    );
};

LockedCard.craft = {
    displayName: "LockedCard",
    rules: {
        canMoveIn: (incomingNodes) => {
            return incomingNodes.every((node) => {
                const name = node.data.displayName;
                return name === "Card6Element";
            });
        }
    }
};