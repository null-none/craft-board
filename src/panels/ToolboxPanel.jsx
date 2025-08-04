import React from "react";
import { useEditor } from "@craftjs/core";
import { ImageByUrl6Element } from "../elements/ImageByUrl6";
import { ImageByUrl12Element } from "../elements/ImageByUrl12";
import { Card6Element } from "../elements/Card6";
import { Card12Element } from "../elements/Card12";
import { Text6Element } from "../elements/Text6";
import { Text12Element } from "../elements/Text12";

export const ToolboxPanel = () => {
  const { connectors } = useEditor();
  return (
    <div class="row row-cols-2">
      <div
        ref={(ref) => connectors.create(ref, <Text6Element text="Text" />)}
        className="col"
      >
        <div class="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i class="bi bi-fonts pe-2"></i>{" "}
          <small class="border-start border-dark ps-3">50%</small>
        </div>
      </div>
      <div
        ref={(ref) => connectors.create(ref, <Text12Element text="Text" />)}
        className="col"
      >
        <div class="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i class="bi bi-fonts pe-2"></i>{" "}
          <small class="border-start border-dark ps-3">100%</small>
        </div>
      </div>
      <div
        ref={(ref) => connectors.create(ref, <Card6Element />)}
        className="col"
      >
        <div class="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i class="bi bi-card-list pe-2"></i>{" "}
          <small class="border-start border-dark ps-3">50%</small>
        </div>
      </div>

      <div
        ref={(ref) => connectors.create(ref, <Card12Element />)}
        className="col"
      >
        <div class="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i class="bi bi-card-list pe-2"></i>{" "}
          <small class="border-start border-dark ps-3">100%</small>
        </div>
      </div>
      <div
        ref={(ref) => connectors.create(ref, <ImageByUrl6Element />)}
        className="col"
      >
        <div class="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i class="bi bi-card-image pe-2"></i>{" "}
          <small class="border-start border-dark ps-3">50%</small>
        </div>
      </div>
          <div
        ref={(ref) => connectors.create(ref, <ImageByUrl12Element />)}
        className="col"
      >
        <div class="border border-dark rounded m-1 p-2 w-100 text-center user-select-none">
          <i class="bi bi-card-image pe-2"></i>{" "}
          <small class="border-start border-dark ps-3">100%</small>
        </div>
      </div>
    </div>
  );
};
