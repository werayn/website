export const compareDate = (from, to) => {
    const d1 = Date.parse(from);
    const d2 = Date.parse(to);
    if (d1 >= d2) {
        return false;
    }
    return true;
}
;
