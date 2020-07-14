const {
    connection
} = require("../../config")

module.exports = {
    userRegistration: (req, res) => {
        const {
            full_name,
            email,
            password
        } = req.body

        const query = `INSERT INTO mysql_demo.users (full_name, email, password) VALUES ('${full_name}', '${email}', '${password}')`
        connection.query(query, function (error, result, fields) {
            if (error) {
                res.send({
                    message: 'Registration Fail',
                    error
                })
            } else {
                res.send({
                    message: 'Registration Succesful',
                    result: result
                })
            }
        })
    }
}