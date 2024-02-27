import authModel from '../models/auth.js';

export default {
    login: async (req, res) => {
        const { email, password } = req.body;
        return authModel.login(email, password)
            .then((response) => {
                res.json(response);
            })
            .catch((error) => {
                res.status(500).json({
                    error_code: 110,
                    error_title: "Login Failure",
                    error_message: "Email or Password was Invalid"
                });
            })
    },
    register: async (req, res) => {
        const { first_name, last_name, email, password } = req.body;
        return authModel.register(first_name, last_name, email, password)
            .then((response) => {
                res.json(response);
            })
            .catch((error) => {
                res.status(500).json({
                    error_code: 111,
                    error_title: `Failed to register email ${email}`,
                    error_message: error.message
                });
            })
    }
}