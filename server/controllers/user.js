import userModel from '../models/user.js';

export default {
    view_messages: async (req, res) => {
        try {
            const { user_id } = req.body;
            const messages = await userModel.view_messages(user_id);
            res.json(messages);
        } catch (error) {
            res.status(500).json({
                error_code: 101,
                error_title: "Failed to view message",
                error_message: error.message
            });
        }
    },
    

    send_message: async (req, res) => {
        try {
            const { sender, receiver, message } = req.body;
            const response = await userModel.send_message(sender, receiver, message);
            res.json(response);
        } catch (error) {
            res.status(500).json({
                error_code: 102,
                error_title: "Failed to send message",
                error_message: error.message
            });
        }
    },

    list_all_users: async (req, res) => {
        try {
            const { sender } = req.query;
            const users = await userModel.list_all_users(sender);
            res.json(users);
        } catch (error) {
            res.status(500).json({
                error_code: 103,
                error_title: "Failed to retrieve users",
                error_message: error.message
            });
        }
    }
};