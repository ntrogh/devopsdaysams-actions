const fetch = require("node-fetch");
const got = require("got");

const utils = {
    // Invoke the API to post a quote to the Zen wall
    // baseUrl: base URL of the API
    // repoUrl: the URL to the GitHub repository, passed as a query parameter to the API endpoint
    addToWall: async function (baseUrl, repoUrl) {
        const response = await got.post(`${baseUrl}?repoUrl=${repoUrl}`, { json: true });
        console.log(response.body);
        return response.body;
    }

};

module.exports = utils;