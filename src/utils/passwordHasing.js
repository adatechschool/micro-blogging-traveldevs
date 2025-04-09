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
            console.log(enteredPassword, truePassword);
            
            const validPassword = await bcrypt.compare(enteredPassword, truePassword);
            console.log(validPassword);
            
            if (!validPassword) {
                return {connected: false};
            }
        } catch (error) {
            console.error(error);
        }
    }
}