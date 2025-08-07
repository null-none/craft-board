import React, { useRef, useEffect, useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Col, Button } from "react-bootstrap";
import Editor, {
  BtnBold,
  BtnItalic,
  Toolbar,
  BtnUnderline,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
  BtnClearFormatting,
  HtmlButton,
  BtnUndo,
  BtnRedo,
  Separator,
  BtnStyles,
} from "react-simple-wysiwyg";
import parse from "html-react-parser";


export const Faq12Element = ({
  title = "Headline",
  body = "This is a sample card body.",
}) => {
  const {
    connectors: { connect, drag },
    actions: nodeActions,
    id,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const { actions: editorActions } = useEditor();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [body]);

  return (
    <Col md={12}>
      <div
        ref={(ref) => connect(drag(ref))}
        className="card p-3 m-1"
        onClick={() => !editing && setEditing(true)}
      >
        {editing ? (
          <div>
            <input
              className="form-control mb-2"
              value={title}
              onChange={(e) =>
                nodeActions.setProp((props) => {
                  props.title = e.target.value;
                })
              }
            />
            <Editor
              containerProps={{ style: { resize: "vertical" } }}
              value={body} onChange={(e) =>
                nodeActions.setProp((props) => {
                  props.body = e.target.value;
                })
              }>
              <Toolbar>
                <BtnUndo />
                <BtnRedo />
                <Separator />
                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <BtnStrikeThrough />
                <Separator />
                <BtnNumberedList />
                <BtnBulletList />
                <Separator />
                <BtnLink />
                <BtnClearFormatting />
                <HtmlButton />
                <Separator />
                <BtnStyles />
              </Toolbar>
            </Editor>

            <div className="d-grid gap-2">
              <Button variant="outline-primary" onClick={() => {
                setEditing(false);
                editorActions.selectNode();
              }}>Save</Button>
            </div>
          </div>
        ) : (
          <>
            <h5 className="card-title">{title}</h5>
            <div className="card-text">{parse(body)}</div>
          </>
        )}
      </div>
    </Col>
  );
};
Faq12Element.craft = {
  displayName: "Faq12Element",
  props: {
    title: "Headline",
    body: "This is a sample card body.",
  },
};
