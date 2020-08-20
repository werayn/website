const trimmedTerm = (str, size) => {
    if (str.length > size) {
        let trimmedString = str.substr(0, size - 3);
        trimmedString = trimmedString + ' ...';
        return trimmedString;
    }
    else {
        return str;
    }
};

export { trimmedTerm };
