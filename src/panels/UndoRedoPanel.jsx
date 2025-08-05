import React from "react";
import { useEditor } from "@craftjs/core";

export const UndoRedoPanel = () => {
  const { actions, query, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );
  return (
    <div className="d-flex gap-2 mb-2">
      <button
        className="btn btn-outline-dark"
        disabled={!canUndo}
        onClick={() => actions.history.undo()}
      >
        <i className="bi bi-arrow-counterclockwise pe-2"></i>{" "}
        <i className="border-start border-dark ps-3"></i> Undo
      </button>
      <button
        className="btn btn-outline-darkk"
        disabled={!canRedo}
        onClick={() => actions.history.redo()}
      >
        <i className="bi bi-arrow-clockwise pe-2"></i>{" "}
        <i className="border-start border-dark ps-3"></i> Redo
      </button>
    </div>
  );
};
