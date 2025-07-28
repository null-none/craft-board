import React from "react";
import { useEditor } from "@craftjs/core";
import ListGroup from "react-bootstrap/ListGroup";
import { ImageByUrl6Element } from "../elements/ImageByUrl6";
import { Button6Element } from "../elements/Button6";
import { Card6Element } from "../elements/Card6";
import { Card12Element } from "../elements/Card12";
import { Text6Element } from "../elements/Text6";
import { Text12Element } from "../elements/Text12";

export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <ListGroup>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <Text6Element text="Text" />)}
          className="btn btn-light mb-2 w-100"
        >
          Text Element [6 columns]
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <Text12Element text="Text" />)}
          className="btn btn-light mb-2 w-100"
        >
          Text Element [12 columns]
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <Button6Element text="Button" />)}
          className="btn btn-light mb-2 w-100"
        >
          Button Element [6 columns]
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <Card6Element />)}
          className="btn btn-light mb-2 w-100"
        >
          Card Element [6 columns]
        </div>
      </ListGroup.Item>
        <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <Card12Element />)}
          className="btn btn-light mb-2 w-100"
        >
          Card Element [12 columns]
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          ref={(ref) => connectors.create(ref, <ImageByUrl6Element />)}
          className="btn btn-light mb-2 w-100"
        >
          Image Element [6 columns]
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
