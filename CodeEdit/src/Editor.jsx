import { useState } from "react";
// import "./Editor.css";
import Encrypt from "./Encrypt";
import Decrypt from "./Decrypt";

function Editor() {
  const [DecryptTxt, setDecryptTxt] = useState("");
  const [EncryptTxt, setEncryptTxt] = useState("");
  const text = "Test Result";
  let test = "test cosmmit";

  const handleChangeDecrypt = (event) => {
    setDecryptTxt(event.target.value);
  };

  const handleChangeEncrypt = (event) => {
    setEncryptTxt(event.target.value);
  };

  return (
    <>
      <div id="container" className="flex flex-col place-content-center">
        <div className="p-5">
          <h1 className="font-Arial flex justify-around text-white m-2">
            <div className="border-2 bg-gray-500 px-20 py-10">Encrypt</div>
          </h1>
          <div id="encrypt-input" className="flex justify-center p-5">
            <input
              className="px-3 py-4 placeholder-blueGray-300 text-white relative bg-slate-500 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              placeholder="Encrypt a message"
              onChange={handleChangeDecrypt}
            />
          </div>

          <div className="text-white flex justify-center">
            <Decrypt text={DecryptTxt} />
          </div>
        </div>

        <div id="decrypt" className="p-5">
          <h1 className="font-Arial flex justify-around text-white m-2">
            <div className="border-2 bg-gray-500 px-20 py-10">Decrypt</div>
          </h1>
          <div id="decrypt-input" className="flex justify-center p-5">
            <input
              className="px-3 py-4 placeholder-blueGray-300 text-white relative bg-slate-500 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              placeholder="Decrypt a BDC message"
              onChange={handleChangeEncrypt}
            />
          </div>

          <div className="text-white flex justify-center">
            <Encrypt text={EncryptTxt} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
