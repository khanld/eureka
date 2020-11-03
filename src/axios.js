const axioss = require('axios');

export const axios = axioss.create({
    baseURL: 'https://41pb5.sse.codesandbox.io/api/v1'
});
