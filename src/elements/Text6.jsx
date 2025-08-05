import React, { useRef, useEffect, useState } from "react";
import { useNode } from "@craftjs/core";

import Col from "react-bootstrap/Col";
import ParagraphElement from "./Paragraph";

export const Text6Element = ({ text }) => {
  const {
    connectors: { connect, drag },
    actions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [editing, setEditing] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <Col md={6}>
      <div ref={(ref) => connect(drag(ref))} onClick={() => setEditing(true)} className="p-3 m-1">
        {editing ? (
          <textarea
            className="form-control"
            value={text}
            autoFocus
            ref={ref}
            onBlur={() => setEditing(false)}
            style={{ overflow: "hidden", resize: "none" }}
            onChange={(e) =>
              actions.setProp((props) => {
                props.text = e.target.value;
              })
            }
          />
        ) : (
          <ParagraphElement text={text} />
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
