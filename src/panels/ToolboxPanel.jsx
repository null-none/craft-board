import React from "react";
import { useEditor } from "@craftjs/core";
import { ImageByUrl6Element } from "../elements/ImageByUrl6";
import { ImageByUrl12Element } from "../elements/ImageByUrl12";
import { Card6Element } from "../elements/Card6";
import { Faq12Element } from "../elements/Faq12";
import { Text6Element } from "../elements/Text6";
import { Text12Element } from "../elements/Text12";
import { Headline6Element } from "../elements/Headline6";
import { Headline12Element } from "../elements/Headline12";

export const ToolboxPanel = () => {
  const { connectors } = useEditor();
  return (
    <div className="row pt-5">
      <div
        ref={(ref) => connectors.create(ref, <Card6Element />)}
        className="col-12"
      >
        <div className="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i className="bi-postcard-heart"></i>{" "}
          <i className="bi bi-grip-vertical"></i>
          <small>Tool Card</small>
        </div>
      </div>
      <div
        ref={(ref) => connectors.create(ref, <Faq12Element />)}
        className="col-12"
      >
        <div className="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i className="bi-question-square"></i>{" "}
          <i className="bi bi-grip-vertical"></i>
          <small>FAQ item</small>
        </div>
      </div>
    </div>
  );
};
