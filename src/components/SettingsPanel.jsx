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

  return (
    <Card className="p-2 mt-3">
      <Card.Body>
        <Card.Title>Customize</Card.Title>
        {Object.keys(props).map((key) => (
          <div key={key} className="mb-2">
            <label className="form-label">{key}</label>
            <input
              className="form-control"
              value={props[key]}
              onChange={(e) =>
                actions.setProp(id, (props) => (props[key] = e.target.value))
              }
            />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};
