import axios from "axios";

export default axios.create({
    baseURL: "https://c59deabb-094f-4994-8e73-8d1b7a41dcb1.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
});

//TODO general error handling - important