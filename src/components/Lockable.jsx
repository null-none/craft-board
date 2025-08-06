import { Element, useNode } from "@craftjs/core";

export const Lockable = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect} style={{ border: "1px dashed gray", padding: 10 }} className="row">
            {children}
        </div>
    );
};

Lockable.craft = {
    rules: {
        canMoveIn: () => false,
        canDrop: () => false,
    },
    displayName: "Lockable",
};