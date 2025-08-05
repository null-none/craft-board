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
      <i className="bi bi-arrow-clockwise pe-2"></i>{" "}
      <i className="border-start border-dark ps-3"></i> Export
    </button>
  );
};
