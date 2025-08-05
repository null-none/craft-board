import React, { useRef, useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import Col from "react-bootstrap/Col";

import ParagraphElement from "./Paragraph";

export const Headline12Element = ({
  title = "Headline",
  body = "This is a sample text.",
}) => {
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
  }, [body]);

  return (
    <Col md={12}>
      <div
        ref={(ref) => connect(drag(ref))}
        className="p-3 m-1"
        onClick={() => setEditing(true)}
      >
        {editing ? (
          <div>
            <input
              className="form-control mb-2"
              value={title}
              onBlur={() => setEditing(false)}
              onChange={(e) =>
                actions.setProp((props) => {
                  props.title = e.target.value;
                })
              }
            />
            <textarea
              className="form-control"
              value={body}
              autoFocus
              ref={ref}
              onBlur={() => setEditing(false)}
              style={{ overflow: "hidden", resize: "none" }}
              onChange={(e) =>
                actions.setProp((props) => {
                  props.body = e.target.value;
                })
              }
            />
          </div>
        ) : (
          <>
            <h5 className="card-title">{title}</h5>
            <ParagraphElement text={body} className="card-text" />
          </>
        )}
      </div>
    </Col>
  );
};
Headline12Element.craft = {
  props: {
    title: "Headline",
    body: "This is a sample text.",
  },
};
