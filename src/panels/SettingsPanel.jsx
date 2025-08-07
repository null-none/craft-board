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


  return (
    <div className="pt-5">
      <Accordion defaultActiveKey={[]} alwaysOpen>
        {selected ? (
          <Accordion.Item eventKey="0">
            <Accordion.Header>Customize</Accordion.Header>
            <Accordion.Body>
              <button
                className="btn btn-outline-danger mt-3 w-100"
                onClick={handleDelete}
              >
                Delete
              </button>
            </Accordion.Body>
          </Accordion.Item>
        ) : null}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Previews</Accordion.Header>
          <Accordion.Body className="d-flex flex-column gap-2">
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <Button disabled variant="primary">Add Preview</Button>
          </Accordion.Body>
        </Accordion.Item>        <Accordion.Item eventKey="2">
          <Accordion.Header>Images</Accordion.Header>
          <Accordion.Body className="d-flex flex-column gap-2">
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt="Placeholder"
              className="img-fluid mb-2"
            />
            <Button disabled variant="primary">Add Image</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
