import Editor from "./Editor";

function App() {
  return (
    <div className="overflow-auto h-screen bg-gray-700">
      <h1 className="flex justify-center text-white text-3xl font-Arial p-10">
        Brain Duck Cipher
      </h1>
      <Editor />
    </div>
  );
}

export default App;
