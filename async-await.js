/*const getStatusAlt = (user) => {
    return new Promise((resolve, reject) => {
        if (user) {
            resolve(user)
        }
        else {
            reject('This is an error');
        }
    })
};

console.log(getStatusAlt());*/

const getStatusAlt = async (userId) => {
    throw new Error('This is an error');
    return 'Suraj';
};

getStatusAlt().then((user) => {
    console.log(user)
}).catch((e) => {
    console.log(e);
});
