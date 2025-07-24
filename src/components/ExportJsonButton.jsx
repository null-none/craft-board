import React from "react";
import { useEditor } from "@craftjs/core";

export const ExportJsonButton = () => {
  const { query } = useEditor();

  const handleExport = () => {
    const json = query.serialize();
    navigator.clipboard.writeText(json).then(() => {
      alert("JSON copied to clipboard!");
    });
  };

  return (
    <button onClick={handleExport} className="btn btn-dark mt-3 w-100">JSON Result</button>
  );
};
