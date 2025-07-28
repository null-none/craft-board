import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import Col from "react-bootstrap/Col";

export const ImageByUrl6Element = ({ src }) => {
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
            value={src}
            autoFocus
            onBlur={() => setEditing(false)}
            onChange={(e) =>
              actions.setProp((props) => {
                props.src = e.target.value;
              })
            }
          />
        ) : (
          <img src={src} alt="User image" className="img-fluid" />
        )}
      </div>
    </Col>
  );
};

ImageByUrl6Element.craft = {
  props: {
    src: "https://placehold.co/600x400/EEE/31343C",
  },
};
