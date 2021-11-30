function truncateMiddle(text, start = 5, end = 4, separator = '...') {
    if (!text) {
        return;
    }
    const textLength = text.length;
    if (textLength <= start + end) {
        return text;
    }
    const startText = text.substr(0, start);
    const endText = text.substr(textLength - end);
    return `${ startText }${ separator }${ endText }`;
}

export { truncateMiddle };
