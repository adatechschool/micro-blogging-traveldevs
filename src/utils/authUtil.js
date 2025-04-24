// const test = {
//     email : "toto@toto.com",
//     password : "toto"
// }

export const isEmail = (entry) => {
    const email = entry.email;
    const password = entry.password;
    if (email.match(/@/)) {
        return entry;
    } else {
        return {
            username : email,
            password : password
        }
    }
};

// console.log (isEmail(test))