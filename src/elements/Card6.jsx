import React, { useRef, useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import Col from "react-bootstrap/Col";

import ParagraphElement from "./Paragraph";

export const Card6Element = ({
  title = "Headline",
  body = "This is a sample card body.",
  button = "",
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
    <Col md={6}>
      <div
        ref={(ref) => connect(drag(ref))}
        className="card p-3 m-1"
        onClick={() => setEditing(true)}
      >
        {editing ? (
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 m-1">
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
            </div>
            <div className="col-md-5 text-center align-self-center">
              <img
                src="https://placehold.co/600x400/EEE/31343C"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <textarea
                className="form-control mb-2"
                value={body}
                ref={ref}
                onBlur={() => setEditing(false)}
                style={{ overflow: "hidden", resize: "none" }}
                onChange={(e) =>
                  actions.setProp((props) => {
                    props.body = e.target.value;
                  })
                }
              />
              <input
                className="form-control mb-2"
                value={button}
                onBlur={() => setEditing(false)}
                onChange={(e) =>
                  actions.setProp((props) => {
                    props.button = e.target.value;
                  })
                }
              />
            </div>
          </div>
        ) : (
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-md-5 text-center align-self-center">
              <img
                src="https://placehold.co/600x400/EEE/31343C"
                alt="Placeholder"
                className="img-fluid mb-2"
              />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <ParagraphElement text={body} className="card-text" />
              <button className="btn btn-primary mt-2">{button}</button>
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};
Card6Element.craft = {
  props: {
    title: "Heqadline",
    body: "This is a sample card body.",
    button: "",
  },
};
