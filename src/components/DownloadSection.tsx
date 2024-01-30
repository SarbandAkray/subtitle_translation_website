import windowsLogo from "/paltformLogos/windows.png";
import macLogo from "/paltformLogos/macbook.png";
import linuxLogo from "/paltformLogos/linux.png";
import androidLogo from "/paltformLogos/android.png";
import axios from "axios";
import fileDownload from "js-file-download";
import { useState } from "react";

export default function DownloadSection() {
  const [windowsStarted, setWindowsStarted] = useState(false);
  const [macStarted, setMacStarted] = useState(false);
  const [linuxStarted, setLinuxStarted] = useState(false);

  const handleDownload = (url: string, filename: string) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
        setWindowsStarted(false);
        setLinuxStarted(false);
        setMacStarted(false);
      });
  };
  return (
    <div className="w-screen flex flex-col gap-10 align-middle justify-center text-center">
      <div>
        <h1 className="text-4xl py-6">دایبەزێنە بۆ کۆمپیتەرەکەت</h1>
        <h2 className="text-lg">ڤێرژنی بێتا v 0.0.1 (beta)</h2>
        <div className="flex justify-center w-screen  px-5 gap-10">
          <div className="flex flex-col gap-6">
            <img src={windowsLogo} width="200px" />
            <h1>Windows</h1>
            {windowsStarted === false ? (
              <button
                onClick={() => {
                  setWindowsStarted(true);
                  handleDownload(
                    "/setupFiles/0.0.1/Zhernus-0.0.1-setup.exe",
                    "Zhernus-0.0.1-setup.exe"
                  );
                }}
                className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800"
              >
                دایبەزێنە
              </button>
            ) : (
              <button className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800 animate-bounce">
                ...
              </button>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <img src={macLogo} width="204px" />
            <h1>MacBook</h1>
            {macStarted === false ? (
              <button
                onClick={() => {
                  setMacStarted(true);
                  handleDownload(
                    "/setupFiles/0.0.1/Zhernus-0.0.1.dmg",
                    "Zhernus-0.0.1.dmg"
                  );
                }}
                className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800"
              >
                دایبەزێنە
              </button>
            ) : (
              <button className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800 animate-bounce">
                ...
              </button>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <img src={linuxLogo} width="200px" alt="" />
            <h1>Linux</h1>
            {linuxStarted === false ? (
              <button
                onClick={() => {
                  setLinuxStarted(true);
                  handleDownload(
                    "/setupFiles/0.0.1/Zhernus_0.0.1_amd64.deb",
                    "Zhernus_0.0.1_amd64.deb"
                  );
                }}
                className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800"
              >
                دایبەزێنە
              </button>
            ) : (
              <button className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800 animate-bounce">
                ...
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl py-6">دایبەزێنە بۆ مۆبایلەکەت</h1>
        <h2 className="text-lg">ڤێرژنی بێتا v 0.0.1 (beta) </h2>
        <h2 className="text-green-400 text-3xl font-bold animate-pulse ">
          بەم زووانە ....
        </h2>
        <div className="flex justify-center w-screen  px-5 gap-10 mt-4">
          <div className="flex flex-col gap-6">
            <img src={macLogo} alt="" width="204px" />
            <h1>Iphone</h1>
            <button
              disabled
              className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800 disabled:bg-green-950"
            >
              بەم زووانە ....
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <img src={androidLogo} alt="" width="200px" />
            <h1>Android</h1>
            <button
              disabled
              className="bg-green-600  p-2 px-4 rounded-md hover:bg-green-800 disabled:bg-green-950"
            >
              بەم زووانە ....
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
