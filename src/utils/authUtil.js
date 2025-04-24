export const isEmail = (entry) => {
    let nameInput = "";
    if (entry.match(/@/)) {
        return nameInput = "email";
    } else {
        return nameInput = "username"
    }
}