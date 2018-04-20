const users = [{
    id: 1,
    name: 'Suraj',
    schoolId: 101
}, {
    id: 2,
    name: 'Jes',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

// Finding users by id
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((item) => {
            return item.id === id;
        });
        if(user) {
            resolve(user);
        }
        else {
            reject(`Unable to find id of ${id}`)
        }
    })
};

/*getUser(2).then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e)
});*/



// Finding users by schoolid
const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => {
            return grade.schoolId === schoolId
        }));
    })
};

/*getGrades(101).then((users) => {
    console.log(users);
}).catch((e) => {
    console.log(e);
});*/


// ========== USING PROMISES ========== //
const getStatus = ((userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId)
    }).then((grades) => {
        let average = 0;

        if(grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a,b) => a + b) / grades.length;
        }

        return `${user.name} has a ${average}% in the class`;
    })
});

/*getStatus(1).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});*/


// ========== USING async await ========== //
const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);

    let average = 0;

    if(grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a,b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class`;
};

getStatusAlt(2).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});
