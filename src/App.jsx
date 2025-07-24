import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";
import { ExportJsonButton } from "./components/ExportJsonButton";
import { ImageByUrlElement } from "./elements/ImageByUrl";
import { ButtonElement } from "./elements/Button";
import { CardElement } from "./elements/Card";
import { TextElement } from "./elements/Text";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <Container>
      <Row>
        <Editor resolver={{ TextElement, ButtonElement, CardElement, ImageByUrlElement }}>
          <Col md={8} className="p-5 border">
            <Frame>
              <Element is="div" canvas>
                <TextElement text="Example text" />
                <ImageByUrlElement url="https://via.placeholder.com/150" />
              </Element>
            </Frame>
          </Col>
          <Col md={4}>
            <Toolbox />
            <SettingsPanel />
            <ExportJsonButton />
          </Col>
        </Editor>
      </Row>
    </Container>
  );
}
