import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";

import { ToolboxPanel } from "./panels/ToolboxPanel";
import { ExportPanel } from "./panels/ExportPanel";
import { UndoRedoPanel } from "./panels/UndoRedoPanel";

import { SettingsPanel } from "./panels/SettingsPanel";
import { ImageByUrl6Element } from "./elements/ImageByUrl6";
import { ImageByUrl12Element } from "./elements/ImageByUrl12";
import { Card6Element } from "./elements/Card6";
import { Faq12Element } from "./elements/Faq12";
import { Text6Element } from "./elements/Text6";
import { Text12Element } from "./elements/Text12";
import { Headline6Element } from "./elements/Headline6";
import { Headline12Element } from "./elements/Headline12";

import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <Container fluid>
      <Editor
        resolver={{
          Text6Element,
          Card6Element,
          Faq12Element,
          ImageByUrl6Element,
          ImageByUrl12Element,
          Text12Element,
          Headline6Element,
          Headline12Element,
        }}
      >
        <>
          <div className="fixed-top">
            <Row className="mb-3 bg-light">
              <Col>
                <div className="d-flex flex-row bd-highlight justify-content-center">
                  <div className="p-2 bd-highlight">
                    <UndoRedoPanel />
                  </div>
                  <div className="p-2 bd-highlight">
                    <ExportPanel />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="wrapper pt-5">
            <Col md={2} className="vh-100 p-3 border-end">
              <ToolboxPanel />
            </Col>
            <Col md={8} className="p-4">
              <Frame>
                <div className="row">
                  <Element is="div" canvas className="row">
                    <Headline6Element
                      title="Online Digital Signature Maker"
                      body="Try our free online digital signature maker and creator tools. They let you create transparent signatures that you can use in PDF and Word documents, remove the background from signatures, convert JPG signatures to PNG signatures, change signature color, rotate signatures, and more!"
                    />
                    <ImageByUrl6Element url="https://via.placeholder.com/150" />
                    <Card6Element
                      button="Try JPG to PNG Signature Converter"
                      title="Convert a JPG Signature to a PNG Signature"
                      body="Our signature converter lets you quickly and easily convert a signature from the JPG format to a signature in the PNG format."
                    />
                    <Card6Element
                      button="Try PNG Signature Background Remover"
                      title="Remove PNG Signature Background"
                      body="Our PNG signature background remover lets you quickly and easily remove the background from a PNG image of a signature."
                    />
                    <Card6Element
                      button="Try PNG Signature Background Adder"
                      title="Add PNG Signature Background"
                      body="Our PNG signature background adder lets you quickly and easily convert a transparent PNG signature into a non-transparent signature filled with a color of your choice."
                    />
                    <Card6Element
                      button="Try JPG Signature Background Remover"
                      title="Remove JPG Signature Background"
                      body="Our JPG signature background remover lets you quickly and easily turn a non-transparent JPG photo of a signature into a transparent image that you can use to sign documents."
                    />
                    <Headline12Element
                      title="Frequently Asked Questions"
                      body=""
                    />
                    <Faq12Element
                      title="What is a digital signature?"
                      body="A Digital Signature Maker is a program that allows you to solve all tasks related to creating, modifying, and improving signatures for digital documents. For example, you can convert a digital signature to different file format (such as JPG signature to a PNG signature), remove signature background, change signature color, rotate a signature so that it's straight, and much more. Each Digital Signature Maker tool has a download button that's one click away and once you have edited your signature, you can instantly download it. To become an efficient Digital Signature Maker user, you just need to learn one of the tools, and you'll instantly know how to use all of them because they all share the same user interface. The Digital Signature Maker tools that we have created have become indispensable for business documents and they are now used by millions of users and hundreds of thousands of businesses."
                    />
                    <Faq12Element
                      title="What is a Digital Signature?"
                      body="A Digital Signature is an image file that can be used to electronically sign online documents, such as Word and PDF. A Digital Signature is also called an Electronic Signature or E-Signature for short. Usually Digital Signatures have the PNG file format as this file format supports transparency. Once you have a crated a Digital Signature, you can import it in the document and move use the 'bring-to-front' feature to position over the signature field. Digital Signatures are most often used to confirm receipt of a service or product, agreeing to terms, and approving documents. Please note that the tools that we offer are strictly for working with written signatures and and they aren't related to cryptography or encryption."
                    />
                    <Headline12Element
                      title="Our Users and Customers"
                      body="Browserling and our online tools are used by millions of users every month, and our customers include governments, states, cities, banks, stock exchanges, universities, newspapers, Forbes 100, Forbes 500 companies, and private multi-billion dollar companies."
                    />
                    <ImageByUrl12Element />
                  </Element>
                </div>
              </Frame>
            </Col>
            <Col md={2} className="vh-100 p-3 border-start">
              <SettingsPanel />
            </Col>
          </Row>
        </>
      </Editor>
    </Container>
  );
}
