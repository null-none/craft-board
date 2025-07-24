import React, { useState } from "react";
import { useNode } from "@craftjs/core";

export const ButtonElement = ({ text }) => {
  const {
    connectors: { connect, drag },
    actions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [editing, setEditing] = useState(false);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={() => setEditing(true)}>
      {editing ? (
        <input
          className="form-control"
          value={text}
          autoFocus
          onBlur={() => setEditing(false)}
          onChange={(e) =>
            actions.setProp(id, (props) => (props.text = e.target.value))
          }
        />
      ) : (
        <button className="btn btn-primary">{text}</button>
      )}
    </div>
  );
};
ButtonElement.craft = {
  props: {
    text: "Button element",
  },
};
