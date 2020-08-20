const getTextSelection = function (editor) {
    const selection = window.getSelection();

    if (selection != null && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        return {
            start: getTextLength(editor, range.startContainer, range.startOffset),
            end: getTextLength(editor, range.endContainer, range.endOffset),
        };
    } else
    {return null;}
};

const getTextLength = function (parent, node, offset) {
    let textLength = 0;

    if (node.nodeName === '#text')
    {textLength += offset;}
    else {for (let i = 0; i < offset; i++)
    {textLength += getNodeTextLength(node.childNodes[i]);}}

    if (node !== parent)
    {textLength += getTextLength(parent, node.parentNode, getNodeOffset(node));}

    return textLength;
};

const getNodeTextLength = function (node) {
    let textLength = 0;
    if (node.nodeName === 'BR')
    {textLength = 1;}
    else if (node.nodeName === '#text')
    {textLength = node.nodeValue.length;}
    else if (node.childNodes != null)
    {for (let i = 0; i < node.childNodes.length; i++)
    {textLength += getNodeTextLength(node.childNodes[i]);}}

    return textLength;
};

const getNodeOffset = function (node) {
    return node == null ? -1 : 1 + getNodeOffset(node.previousSibling);
};


const handleSelectionPosition = function (term) {
    if (term !== '') {
        const range = window.getSelection().getRangeAt(0);
        if (range) {
            const textSelection = getTextSelection(range.startContainer.parentNode);
            if (textSelection !== null) {
                textSelection.start += 1;
                return textSelection;
            } else
            {return null;}
        } else
        {return null;}
    } else
    {return null;}
};

const trimmedTerm = (str) => {
    if (str.length > 300) {
        let trimmedString = str.substr(0, 300);
        return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + '...';
    }
    else {
        return str;
    }
};

export { handleSelectionPosition, trimmedTerm };
