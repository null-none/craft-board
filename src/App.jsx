import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";

import { ToolboxPanel } from "./panels/ToolboxPanel";
import { ExportPanel } from "./panels/ExportPanel";
import { UndoRedoPanel } from "./panels/UndoRedoPanel";

import { SettingsPanel } from "./panels/SettingsPanel";
import { ImageByUrl6Element } from "./elements/ImageByUrl6";
import { ImageByUrl12Element } from "./elements/ImageByUrl12";
import { Button6Element } from "./elements/Button6";
import { Card6Element } from "./elements/Card6";
import { Card12Element } from "./elements/Card12";
import { Text6Element } from "./elements/Text6";
import { Text12Element } from "./elements/Text12";

import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <Container fluid>
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
        <>
          <Row className="border-bottom mb-3">
            <Col>
              <div class="d-flex flex-row bd-highlight mb-3  justify-content-center">
                <div class="p-2 bd-highlight">
                  <UndoRedoPanel />
                </div>
                <div class="p-2 bd-highlight">
                  <ExportPanel />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={2} className="vh-100 p-3">
              <ToolboxPanel />
            </Col>
            <Col md={8} className="p-4">
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
            <Col md={2} className="bg-light vh-100 p-3">
              <SettingsPanel />
            </Col>
          </Row>
        </>
      </Editor>
    </Container>
  );
}
