import { useState } from "react";
import { useFile } from "../lib/store";
import DragDrop from "./DragDrop";
import { translate } from "../lib/hooks";

export default function FileUpload() {
  const {
    fileName,
    fileContent,
    fileStatus,
    setFileContent,
    setFileName,
    setFileStatus,
  } = useFile();

  // how many line is the subtitle file
  const [lines, setLines] = useState(0);
  // how many lines are translated
  const [lineTranslated, setLineTranslated] = useState(0);

  // when file uploaded
  const onUploadFile = (eventTargetFile: File) => {
    if (eventTargetFile) {
      setFileStatus("fileIsReady");
      setFileName(eventTargetFile?.name.split(".")[0]);

      const reader = new FileReader();
      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        // check if readerEvent is not null - just to fix typescript error
        if (readerEvent?.target?.result) {
          setFileContent(readerEvent.target.result);
        }
      };

      reader.readAsText(eventTargetFile);
    }
  };

  // handle remove button
  const onRemove = () => {
    setFileStatus("noFile");
    setFileName("");
    setFileContent("");
  };

  // handle translate
  const onTranslate = async () => {
    if (fileStatus == "fileIsReady" && typeof fileContent === "string") {
      setFileStatus("loading");
      const lines = fileContent.split("\n");

      setLines(lines.length);

      for (let i = 1; i < lines.length; i++) {
        if (lines[i].length == 0) {
          setLineTranslated(i);
          i += 1;
        } else {
          const translated = await translate(lines[i]);
          try {
            lines[i] = translated?.translation.toString();
          } catch (error) {
            console.log(error);
          }
        }
      }

      setFileContent(lines.join("\n"));
      setFileStatus("complete");
    } else {
      alert("فایلەکە بە سەرکەوتوویی بارنەکراوە");
    }
  };

  const onDownload = () => {
    // Create element with <a> tag
    const link = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([fileContent], { type: "text/plain" });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = "translated.srt";

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="max-w-lg mx-auto p-6 border-4 border-blue-500 rounded-md shadow-lg">
      {/* File Name */}

      <p className="text-lg font-bold mb-4 text-blue-500">
        ناوی فایل: {fileName || "(بەتاڵ)"}
      </p>

      {/* Drag and Drop */}
      <DragDrop onFileSelect={onUploadFile} />

      {/* Status */}
      <p
        className={fileStatus === "loading" ? "text-xl md:text-2xl" : "hidden"}
        dir="rtl"
      >
        {lineTranslated + 1} دێر وەرگێراوە لە کۆی {lines} دێر
      </p>
      {fileStatus === "complete" && (
        <p className="text-green-500 my-3">
          بە سەرکەوتوی وەرگێرانەکە تەواو بوو
        </p>
      )}

      <div className="flex items-center justify-start gap-4">
        {/* Translate Button */}
        <button
          onClick={onTranslate}
          disabled={fileStatus !== "fileIsReady"}
          className="bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-600 rounded-md shadow-md mr-2 hover:bg-blue-600 transition duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:hover:bg-blue-500 disabled:hover:scale-100"
        >
          وەرگێران بکە
        </button>

        {/* Download Button */}
        <button
          onClick={onDownload}
          disabled={fileStatus !== "complete"}
          className="bg-green-500 text-white font-semibold py-2 px-4 border border-green-600 rounded-md shadow-md hover:bg-green-600 transition duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:hover:bg-blue-500 disabled:hover:scale-100"
        >
          دایببەزێنە
        </button>
        {/* remove file */}
        <button
          onClick={onRemove}
          disabled={fileStatus !== "complete"}
          className="bg-red-500 text-white font-semibold py-2 px-4 border border-red-600 rounded-md shadow-md hover:bg-red-600 transition duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:hover:bg-blue-500 disabled:hover:scale-100"
        >
          بیسڕەوە
        </button>
      </div>
    </div>
  );
}
