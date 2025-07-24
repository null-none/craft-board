import React, { useState } from "react";
import { useNode } from "@craftjs/core";

export const ImageByUrlElement = ({ src }) => {
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
          value={src}
          autoFocus
          onBlur={() => setEditing(false)}
          onChange={(e) =>
            actions.setProp(id, (props) => (props.src = e.target.value))
          }
        />
      ) : (
        <img src={src} alt="User image" className="img-fluid" />
      )}
    </div>
  );
};

ImageByUrlElement.craft = {
  props: {
    src: "https://placehold.co/600x400/EEE/31343C",
  },
};
