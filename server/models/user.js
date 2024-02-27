import query from "../db.js"

export default {
    list_all_users: async (user_id) => {
        const sql = `
        SELECT * FROM users
        WHERE user_id <> ?`;

        return await query(sql, [user_id])
            .then((rows) => rows)
            .catch((error) => ({
                error_code: error.sqlState,
                error_title: "Get Users Failure",
                error_message: error.message,
            }))
    },
    send_message: async (sender, receiver, message) => {
        const sql = `
        INSERT INTO messages (sender_user_id, receiver_user_id, message)
        VALUES (?, ?, ?)`;

        return await query(sql, [sender, receiver, message])
            .then(() => ({
                success_code: 200,
                success_title: "Message Sent",
                success_message: "Message was sent successfully"
            }))
            .catch((error) => ({
                error_code: error.sqlState,
                error_title: "Send Message Failure",
                error_message: error.message,
            }))
    },

    view_messages: async (user_id) => {
        const sql = `
        SELECT message_id, sender_user_id, message, epoch
        FROM messages
        WHERE sender_user_id = ? OR receiver_user_id = ?
        ORDER BY epoch;`;

        return await query(sql, [user_id, user_id])
            .then((rows) => ({ messages: rows }))
            .catch((error) => ({
                error_code: error.sqlState,
                error_title: `Failed to retrieve view_message for user_id ${user_id}`,
                error_message: error.message
            }))


    }
}