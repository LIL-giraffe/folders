const useTraverseTree = () => {
  function insertNode(tree, folderID, item, isFolder) {
    if (tree.id === folderID && tree.isFolder) {
      tree.items.unshift({
        id: crypto.randomUUID(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];

    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderID, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, folderID) {
    if (tree.id === folderID) {
      return null;
    }

    let filteredTree = [];
    filteredTree = tree.items
      .filter((item) => item.id !== folderID)
      .map((item) => deleteNode(item, folderID));

    return { ...tree, items: filteredTree };
  }

  function updateNode(tree, folderID, item) {
    if (tree.id === folderID) {
      tree.name = item;
      return tree;
    }

    let updatedItem = [];
    updatedItem = tree.items.map((obj) => {
      return updateNode(obj, folderID, item);
    });

    return { ...tree, items: updatedItem };
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
