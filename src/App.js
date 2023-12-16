
import './App.css';
import Folder from './components/Folder';
import explorer from './data/folderData';
import {useState} from 'react'
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [folder,setFolder] = useState(explorer)
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(folder, folderId, item, isFolder);
    setFolder(finalTree);
  };
  
  return (
    <div >
      <Folder handleInsertNode={handleInsertNode} data={folder}/>
    </div>
  );
}

export default App;
