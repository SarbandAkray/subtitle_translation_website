export type TContainer = {
  children: string | JSX.Element | JSX.Element[];
};

export type TUseFile = {
  fileName: string;
  setFileName: (fileStatus: string) => void;
  fileStatus: TFileStatus;
  setFileStatus: (fileStatus: TFileStatus) => void;
  fileContent: string | ArrayBuffer;
  setFileContent: (fileContent: string | ArrayBuffer) => void;
};

export type TFileStatus = "fileIsReady" | "loading" | "complete" | "noFile";
