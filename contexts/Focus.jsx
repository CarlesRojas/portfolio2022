import React, { createContext, useState, useRef, useEffect, useCallback } from "react";
import { Lrud } from "lrud";
export const Focus = createContext();

const FocusProvider = (props) => {
    // #######################################
    //      LRUD
    // #######################################

    const navigation = useRef();
    const navTree = useRef({});

    const updateNavigationTree = (newFocusNode) => {
        if (!navigation.current || !("id" in navTree.current)) return;
        const currFocusedNode = navigation.current.getCurrentFocusNode()?.id;

        navigation.current.unregisterNode("home");
        navigation.current.registerTree(navTree.current);

        if (currFocusedNode) navigation.current.assignFocus(currFocusedNode);
        else if (newFocusNode) navigation.current.assignFocus(newFocusNode);
        else navigation.current.recalculateFocus();
    };
    const setFocusedNode = (node) => {
        if (navigation.current && navigation.current.getNode(node)) navigation.current.assignFocus(node);
    };

    useEffect(() => {
        if (!navigation.current) navigation.current = new Lrud();
    }, [navigation]);

    // #######################################
    //      KEY EVENTS
    // #######################################

    const handleKeyDown = useCallback(
        (event) => {
            navigation.current.handleKeyEvent(event);
        },
        [navigation]
    );

    useEffect(() => {
        if (!navigation.current) return;

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.addEventListener("keydown", handleKeyDown);
        };
    }, [navigation, handleKeyDown]);

    // #######################################
    //      RENDER
    // #######################################

    return (
        <Focus.Provider
            value={{
                navTree,
                updateNavigationTree,
                setFocusedNode,
            }}
        >
            {props.children}
        </Focus.Provider>
    );
};

export default FocusProvider;
