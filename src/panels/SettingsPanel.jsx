import React from "react";
import { useEditor } from "@craftjs/core";
import Card from "react-bootstrap/Card";

export const SettingsPanel = () => {
  const { selected, actions, query } = useEditor((state) => {
    const [id] = state.events.selected;
    if (id) {
      return {
        selected: state.nodes[id],
      };
    }
    return {};
  });

  if (!selected) return null;

  const { id, data } = selected;
  const props = data.props;

  const handleDelete = () => {
    actions.delete(id);
  };

  return (
    <Card className="p-2 mt-3">
      <Card.Body>
        <Card.Title>Customize</Card.Title>
        <button className="btn btn-outline-danger mt-3 w-100" onClick={handleDelete}>
          Delete Element
        </button>
      </Card.Body>
    </Card>
  );
};
