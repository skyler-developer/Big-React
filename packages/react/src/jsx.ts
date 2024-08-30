import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";

import { Type, Key, Ref, Props, ElementType, ReactElementType } from "shared/ReactTypes";

// ReactElement
const ReactElement = function (type: Type, key: Key, ref: Ref, props: Props): ReactElementType {
    const element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
        __mark: "skyler",
    };
    return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
    let key: Key = null;
    const props: Props = {};
    let ref: Ref = null;
    for (const prop in config) {
        const val = config[prop];
        if (prop === "key") {
            if (val !== undefined) {
                key = String(val);
            }
            continue;
        }
        if (prop === "ref") {
            if (val !== "undefined") {
                ref = val;
            }
            continue;
        }
        if (config.hasOwnProperty(prop)) {
            props[prop] = val;
        }
    }
    const maybeChildrenLength = maybeChildren.length;
    if (maybeChildrenLength === 1) {
        props.children = maybeChildren[0];
    } else {
        props.children = maybeChildren;
    }
    return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
    let key: Key = null;
    const props: Props = {};
    let ref: Ref = null;
    for (const prop in config) {
        const val = config[prop];
        if (prop === "key") {
            if (val !== undefined) {
                key = String(val);
            }
            continue;
        }
        if (prop === "ref") {
            if (val !== "undefined") {
                ref = val;
            }
            continue;
        }
        if (config.hasOwnProperty(prop)) {
            props[prop] = val;
        }
    }

    return ReactElement(type, key, ref, props);
};
