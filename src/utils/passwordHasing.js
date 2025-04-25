import bcrypt from "bcryptjs";

export const PasswordUtils = {
    hashPassword: async (password) => {
        try {
            const salt = await bcrypt.genSalt();

            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        } catch (error) {
            console.error(error);
        }
    },

    verifyPassword: async (enteredPassword, truePassword) => {
        try {
            switch (await bcrypt.compare(enteredPassword, truePassword)) {
                case true:
                    return true
                case false:
                    return false
            }
        } catch (error) {
            console.error(error);
        }
    }
}