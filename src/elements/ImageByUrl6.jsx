import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Col, Button } from "react-bootstrap";

export const ImageByUrl6Element = ({ src }) => {
  const {
    connectors: { connect, drag },
    actions: nodeActions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [editing, setEditing] = useState(false);

  return (
    <Col md={6}>
      <div className="p-3 m-1">
        {editing ? (
          <>
            <input
              className="form-control"
              value={src}
              onClick={() => setEditing(true)}
              onChange={(e) =>
                actions.setProp((props) => {
                  props.src = e.target.value;
                })
              }
            />
            <div className="d-grid gap-2">
              <Button variant="outline-primary" onClick={() => {
                setEditing(false);
                editorActions.selectNode();
              }}>Save</Button>
            </div>
          </>
        ) : (
          <img src={src} className="img-fluid btn btn-link"  data-bs-toggle="modal" data-bs-target="#filesModal" />
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
