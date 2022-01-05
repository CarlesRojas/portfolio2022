import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { Focus } from "../contexts/Focus";

const useFocus = (id, object, parentId) => {
    const { navTree, updateNavigationTree } = useContext(Focus);

    const treeCreated = useRef(false);
    const parentInTree = useRef(false);
    const [done, setDone] = useState(false);

    const findInTree = useCallback((tree, idToFind) => {
        if ("id" in tree && tree.id === idToFind) return true;

        if ("children" in tree) {
            for (let i = 0; i < tree.children.length; i++) {
                if (findInTree(tree.children[i], idToFind)) return true;
            }
        }

        return false;
    }, []);

    const addChildToID = useCallback((tree, targetId, obj) => {
        if ("id" in tree && tree.id === targetId) {
            tree.children.push(obj);
            return true;
        }

        if ("children" in tree) {
            for (let i = 0; i < tree.children.length; i++) {
                if (addChildToID(tree.children[i], targetId, obj)) return true;
            }
        }

        return false;
    }, []);

    useEffect(() => {
        if (!parentId) {
            if (treeCreated.current) return;
            treeCreated.current = true;
            navTree.current = object;
            updateNavigationTree();
            setDone(true);
            return;
        }

        if (!parentInTree.current) {
            let found = findInTree(navTree.current, parentId);
            if (!found) return;
            parentInTree.current = true;
        }

        if (treeCreated.current) return;
        treeCreated.current = true;

        addChildToID(navTree.current, parentId, object);
        updateNavigationTree();
        setDone(true);
    }, [navTree, addChildToID, findInTree, id, object, parentId, updateNavigationTree]);

    return done;
};

export default useFocus;
