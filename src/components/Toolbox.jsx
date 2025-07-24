import React from "react";
import { useEditor } from "@craftjs/core";
import ListGroup from "react-bootstrap/ListGroup";
import { ImageByUrlElement } from "../elements/ImageByUrl";
import { ButtonElement } from "../elements/Button";
import { CardElement } from "../elements/Card";
import { TextElement } from "../elements/Text";

export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <ListGroup>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <TextElement text="Text" />)}
          className="btn btn-light mb-2 w-100"
        >
          Text Element
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <ButtonElement text="Button" />)}
          className="btn btn-light mb-2 w-100"
        >
          Button Element
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <CardElement />)}
          className="btn btn-light mb-2 w-100"
        >
          Card Element
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <ImageByUrlElement />)}
          className="btn btn-light mb-2 w-100"
        >
          Image Element
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
