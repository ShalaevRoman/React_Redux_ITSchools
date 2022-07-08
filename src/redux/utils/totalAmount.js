const totalAmount = (arr) => {
    return arr.reduce((acc, item) => {
        return acc + item.numberStudentsInGroup;
    }, 0)
};

export default totalAmount