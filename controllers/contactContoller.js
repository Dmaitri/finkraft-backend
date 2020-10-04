const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

exports.getAllContacts = async (req, res) => {
    try {
        const response = await axios.get(`https://books.zoho.com/api/v3/contacts?organization_id=${process.env.ORGANIZATIONID}`,
            {
                headers: {
                    Authorization: process.env.AUTHTOKEN
                }
            });
        console.log(response.data)
        res.status(200).json(response.data)
    }
    catch (err) {
        console.log(err)
        res.status(400).send('something went wrong!!')
    }
}