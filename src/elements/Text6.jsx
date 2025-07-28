import React, { useState } from "react";
import { useNode } from "@craftjs/core";

import Col from "react-bootstrap/Col";

export const Text6Element = ({ text }) => {
  const {
    connectors: { connect, drag },
    actions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [editing, setEditing] = useState(false);

  return (
    <Col md={6}>
      <div ref={(ref) => connect(drag(ref))} onClick={() => setEditing(true)}>
        {editing ? (
          <input
            className="form-control"
            value={text}
            autoFocus
            onBlur={() => setEditing(false)}
            onChange={(e) =>
              actions.setProp((props) => {
                props.text = e.target.value;
              })
            }
          />
        ) : (
          <p>{text}</p>
        )}
      </div>
    </Col>
  );
};
Text6Element.craft = {
  props: {
    text: "Text Element",
  },
};
