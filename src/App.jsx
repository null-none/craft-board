import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from "./components/Toolbox";
import { ExportJsonButton } from "./components/ExportJsonButton";
import { SettingsPanel } from "./components/SettingsPanel";
import { ImageByUrl6Element } from "./elements/ImageByUrl6";
import { ImageByUrl12Element } from "./elements/ImageByUrl12";
import { Button6Element } from "./elements/Button6";
import { Card6Element } from "./elements/Card6";
import { Card12Element } from "./elements/Card12";
import { Text6Element } from "./elements/Text6";
import { Text12Element } from "./elements/Text12";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <Container>
      <Row>
        <Editor
          resolver={{
            Text6Element,
            Button6Element,
            Card6Element,
            Card12Element,
            ImageByUrl6Element,
            ImageByUrl12Element,
            Text12Element,
          }}
        >
          <Col md={8} className="p-5 border">
            <Frame>
              <div class="row">
                <Element is="div" canvas class="row">
                  <Text6Element text="Example text" />
                  <ImageByUrl6Element url="https://via.placeholder.com/150" />
                  <Card6Element />
                  <Card6Element />
                  <Card6Element />
                  <Card6Element />
                  <Text12Element text="Example text" />
                </Element>
              </div>
            </Frame>
          </Col>
          <Col md={4}>
            <Toolbox />
            <ExportJsonButton />
            <SettingsPanel />
          </Col>
        </Editor>
      </Row>
    </Container>
  );
}
