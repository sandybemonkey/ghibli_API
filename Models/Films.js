import * as nrc from 'node-rest-client'
const Client = nrc.Client;
let client = new Client();

let Films

// registering remote methods
client.registerMethod("jsonMethod", "https://ghibliapi.herokuapp.com/films", "GET");

client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object
    Films = data
    //console.log(Films);
    // // raw response
    // console.log(response);
});
export { Films }
