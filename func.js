const axios = require('axios');

module.exports = {
    getMenu: async function() {
        const { data } = await axios.get("https://safk.at?json=true");
        console.log(data);
        return JSON.stringify(data);
    },
    getSched: async function(classId) {
        const { data } = await axios.get(`https://safk.at/${classId}?json=true`);
        console.log(data);
        return JSON.stringify(data);
    }
};