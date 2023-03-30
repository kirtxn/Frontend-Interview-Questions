import "./styles.css";
import { useState } from "react";
import folderData from "./data/folderData";
import Folder from "./components/Folder";
export default function App() {
  const [explorerData, setExplorerData] = useState(folderData);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
