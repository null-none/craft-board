import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import Col from "react-bootstrap/Col";

export const Card12Element = ({
  title = "Headline",
  body = "This is a sample card body.",
}) => {
  const {
    connectors: { connect, drag },
    actions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [editing, setEditing] = useState(false);

  return (
    <Col md={12}>
      <div
        ref={(ref) => connect(drag(ref))}
        className="card p-3"
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
              onChange={(e) =>
                actions.setProp((props) => {
                  props.body = e.target.value;
                })
              }
              onBlur={() => setEditing(false)}
            />
          </div>
        ) : (
          <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </>
        )}
      </div>
    </Col>
  );
};
Card12Element.craft = {
  props: {
    title: "Heqadline",
    body: "This is a sample card body.",
  },
};
