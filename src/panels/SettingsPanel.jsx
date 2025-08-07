import React from "react";
import { useEditor } from "@craftjs/core";
import { Accordion, Button } from "react-bootstrap";

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

  const handleDelete = () => {
    const { id, data } = selected;
    actions.delete(id);
  };

  if (!selected) {
    return null;
  }

  var { data } = selected;

  if (data.displayName == "Headline6Element" || data.displayName == "Lockable") {
    return null;
  }

  return (

    <button
      className="btn btn-outline-danger"
      onClick={handleDelete}
    >
      <i className="bi bi-trash"></i>
    </button>
  );
};
