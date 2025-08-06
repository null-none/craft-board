import React, { useRef, useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { Col, Button } from "react-bootstrap";

import ParagraphElement from "./Paragraph";

export const Headline6Element = ({
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

  console.log(editing);

  return (
    <Col md={6}>
      <div
        ref={(ref) => connect(drag(ref))}
        className="p-3 m-1"
        onClick={() => !editing && setEditing(true)}
      >
        {editing ? (
          <div>
            <input
              className="form-control mb-2"
              value={title}
              onChange={(e) =>
                actions.setProp((props) => {
                  props.title = e.target.value;
                })
              }
            />
            <textarea
              className="form-control"
              value={body}
              ref={ref}
              rows="10"
              style={{ overflow: "hidden", resize: "none" }}
              onChange={(e) =>
                actions.setProp((props) => {
                  props.body = e.target.value;
                })
              }
            />
            <div className="d-grid gap-2">
              <Button variant="outline-primary" onClick={() => setEditing(false)}>Save</Button>
            </div>
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
Headline6Element.craft = {
  props: {
    title: "Headline",
    body: "This is a sample text.",
  },
};
