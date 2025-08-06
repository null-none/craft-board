import React from "react";
import { useEditor } from "@craftjs/core";
import Accordion from "react-bootstrap/Accordion";

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

  console.log(data, actions);


  return (
    <div className="pt-5">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Customize</Accordion.Header>
          <Accordion.Body>
            <button
              className="btn btn-outline-danger mt-3 w-100"
              onClick={handleDelete}
            >
              Delete Element
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
