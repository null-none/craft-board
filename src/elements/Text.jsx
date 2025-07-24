import React, { useState } from "react";
import { useNode } from "@craftjs/core";

export const TextElement = ({ text }) => {
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
        <p>{text}</p>
      )}
    </div>
  );
};
TextElement.craft = {
  props: {
    text: "Text Element",
  },
};
