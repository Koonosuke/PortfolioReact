import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Elder() {
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
          fileUrl="/03_1.【3番目】最終プレゼンテーション資料_team1 .pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
}

export default Elder;
