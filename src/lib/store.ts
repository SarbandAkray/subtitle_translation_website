import { create } from "zustand";
import { TFileStatus, TUseFile } from "./types";

export const useFile = create<TUseFile>((set) => ({
  fileName: "",
  setFileName: (fileName: string) => set({ fileName: fileName }),
  fileStatus: "noFile",
  setFileStatus: (fileStatus: TFileStatus) => set({ fileStatus: fileStatus }),
  fileContent: "",
  setFileContent: (fileContent: string | ArrayBuffer) =>
    set({ fileContent: fileContent }),
}));
