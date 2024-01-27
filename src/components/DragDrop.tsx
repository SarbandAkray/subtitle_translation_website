/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDropzone } from "react-dropzone";
import { useFile } from "../lib/store";

export default function DragDrop({ onFileSelect }: any) {
  const { fileStatus } = useFile();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "text/srt": [".srt", ".vtt"],
      },
      onDrop: (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
          onFileSelect(selectedFile);
        }
      },

      multiple: false, // Allow only one file
    });

  return (
    <div
      {...getRootProps()}
      className={`${
        fileStatus === "fileIsReady"
          ? "bg-green-100 border-4 border-green-500"
          : "bg-blue-100 border-dashed border-4 border-blue-500"
      } rounded-lg p-12 text-center mb-6 cursor-pointer hover:bg-blue-200 transition duration-300`}
    >
      <input {...getInputProps()} />
      <p
        className={`text-lg ${
          fileStatus === "fileIsReady" ? "text-green-800" : "text-blue-800"
        }`}
      >
        {isDragActive
          ? "فایلەکە بەربدە"
          : fileStatus === "fileIsReady"
          ? `فایلەکە دانراوە: ${acceptedFiles[0].name}`
          : "فایلی وەرگێرانەکەت (سەبتاتیتڵەکەت) ڕابکێشە بۆ ئێرە، یان کلیک بکە بۆ هەڵبژاردنی فایلەکە لە ئامێرەکەتەوە."}
      </p>
    </div>
  );
}
