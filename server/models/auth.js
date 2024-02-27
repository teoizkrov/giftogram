import query from "../db.js";

export default {
    register: async (email, password, first_name, last_name) => {
        try {
            const sql = `
                INSERT INTO users (email, password, first_name, last_name)
                VALUES (?, ?, ?, ?)`;
            await query(sql, [email, password, first_name, last_name]);
            return {
                success_code: 200,
                success_title: "Registration Successful",
                success_message: "User registered successfully"
            };
        } catch (error) {
            return {
                error_code: 500,
                error_title: "Registration Failure",
                error_message: error.message
            };
        }
    },

    login: async (email, password) => {
        try {
            const sql = `
                SELECT user_id, email, first_name, last_name
                FROM users
                WHERE email = ? AND password = ?`;
            const rows = await query(sql, [email, password]);
            if (rows?.length === 1) {
                return {
                    user_id: rows[0].user_id,
                    email: rows[0].email,
                    first_name: rows[0].first_name,
                    last_name: rows[0].last_name
                };
            } else {
                return {
                    error_code: 401,
                    error_title: "Login Failure",
                    error_message: "Email or password is incorrect"
                };
            }
        } catch (error) {
            return {
                error_code: 500,
                error_title: "Login Failure",
                error_message: error.message
            };
        }
    }
};