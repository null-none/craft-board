import React from "react";
import { useEditor } from "@craftjs/core";

export const ExportPanel = () => {
  const { query } = useEditor();

  const handleExport = () => {
    const json = query.serialize();
    navigator.clipboard.writeText(json).then(() => {
      console.log("JSON copied to clipboard!");
    });
  };

  return (
    <button onClick={handleExport} className="btn btn-outline-dark">
      <i className="bi bi-download"></i> Export
    </button>
  );
};
