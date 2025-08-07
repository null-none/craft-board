import React from "react";
import { useEditor } from "@craftjs/core";
import { Card6Element } from "../elements/Card6";
import { Faq12Element } from "../elements/Faq12";

export const ToolboxPanel = () => {
  const { connectors } = useEditor();
  return (
    <div className="d-flex gap-2 mb-2">
      <div
        ref={(ref) => connectors.create(ref, <Card6Element />)}

      >
        <div className="btn btn-outline-dark">
          <i className="bi-postcard-heart"></i>{" "}
          <i className="bi bi-grip-vertical"></i>
          <small>Tool Card</small>
        </div>
      </div>
      <div
        ref={(ref) => connectors.create(ref, <Faq12Element />)}

      >
        <div className="btn btn-outline-dark">
          <i className="bi-question-square"></i>{" "}
          <i className="bi bi-grip-vertical"></i>
          <small>FAQ Item</small>
        </div>
      </div>
    </div>
  );
};
