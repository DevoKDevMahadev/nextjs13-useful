import React, { useEffect, useRef } from "react";
// import "react-summernote/dist/react-summernote.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import 'jquery/dist/jquery.min.js';
import "./global";
import ReactSummernote from "react-summernote";

const SummernoteComponent = ({ content, onChange }) => {
  const editorRef = useRef(null);
  return (
    // <textarea ref={editorRef} value={content}></textarea>
    <ReactSummernote
      className="w-full h-full min-h-fit max-w-fit"
      disabled={true}
      // height={"100%"}
      value={content}
      onInit={(e) => e?.summernote("code", content)}
      options={{
        innerHeight: "100%",
        outerHeight: "100%",
        disableDragAndDrop: true,
        // lang: "ru-RU",
        // dialogsInBody: true,
        // editable: false,
        // disabled: true,
        toolbar: [
          //   ["style", ["style"]],
          //   ["font", ["bold", "underline", "clear"]],
          //   ["fontname", ["fontname"]],
          //   ["para", ["ul", "ol", "paragraph"]],
          //   ["table", ["table"]],
          //   ["insert", ["link", "picture", "video"]],
          //   ["view", ["fullscreen", "codeview"]],
        ],
        content: { content },
      }}
      onChange={onChange}
    />
  );
};

// export default SummernoteComponent;

module.exports = SummernoteComponent;
