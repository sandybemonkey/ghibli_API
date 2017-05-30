import * as nrc from 'node-rest-client'
const Client = nrc.Client;
let client = new Client();

let People

// registering remote methods
client.registerMethod("jsonMethod", "https://ghibliapi.herokuapp.com/people", "GET");

client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object
    People = data
    //console.log(People);
    // // raw response
    // console.log(response);
});
export { People }
