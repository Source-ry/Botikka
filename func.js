const axios = require('axios');
const util = require('./util');

module.exports = {
    getMenu: async function() {
        const { data } = await axios.get("https://safk.at?json=true");
        const cleaned = util.cleanMenu(data);
        return cleaned.length > 20 ? cleaned : "NO FOOD TODAY";
    },
    getSched: async function(classId) {
        const { data } = await axios.get(`https://safk.at/${classId}?json=true`);
        const matched = module.exports.matchDate(data);
        return matched ? util.cleanSchedule(matched) : "NO SCHEDULE FOR TODAY";
    },
    matchDate: function(data) {
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth()+1;
        const year = d.getFullYear();

        const pvm = `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month}.${year}`;
        
        let dataToReturn = null;
        
        for(let i = 0; i<data.length; i++) {
            if(data[i].day === pvm) {
                dataToReturn = [data[i]];
                break;
            }
        }
        return dataToReturn;
    }
};