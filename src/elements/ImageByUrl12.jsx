import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import Col from "react-bootstrap/Col";

export const ImageByUrl12Element = ({ src }) => {
  const {
    connectors: { connect, drag },
    actions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [editing, setEditing] = useState(false);

  return (
    <Col md={12} className="text-center">
      <div ref={(ref) => connect(drag(ref))} onClick={() => setEditing(true)} className="p-3 m-1">
        {editing ? (
          <input
            className="form-control"
            value={src}
            onBlur={() => setEditing(false)}
            onChange={(e) =>
              actions.setProp((props) => {
                props.src = e.target.value;
              })
            }
          />
        ) : (
          <img src={src} className="img-fluid" />
        )}
      </div>
    </Col>
  );
};

ImageByUrl12Element.craft = {
  props: {
    src: "https://placehold.co/600x400/EEE/31343C",
  },
};
