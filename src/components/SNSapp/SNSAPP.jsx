import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import React from "react";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function SNSAPP() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      style={{
        height: "750px",
        width: "100%",
      }}
    >
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl={`${process.env.PUBLIC_URL}/SNS_NodeandReact.pdf`}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
}

export default SNSAPP;
