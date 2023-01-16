import axios from 'axios'

(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
        factory();
}((function () {
    'use strict';



    function InvalidCharacterError(message) {
        this.message = message;
    }

    InvalidCharacterError.prototype = new Error();
    InvalidCharacterError.prototype.name = "InvalidCharacterError";


    function InvalidTokenError(message) {
        this.message = message;
    }

    InvalidTokenError.prototype = new Error();
    InvalidTokenError.prototype.name = "InvalidTokenError";

    function axiosPost(token, email, creacion, exp) {
        if (typeof token !== "string") {
            throw new InvalidTokenError("Invalid token specified");
        }

        var objeto = {};
        objeto = {
            "email": responsePayload.email,
            "creacion": responsePayload.iat,
            "exp": responsePayload.exp,
            "token": "juan"
        }

        axios.post("https://b1zw5s.deta.dev/appLog/logs", objeto).then((result) => {
            console.log(result.data);
        });

        options = options || {};
        var pos = options.header === true ? 0 : 1;
        try {
            return JSON.parse(base64_url_decode(token.split(".")[pos]));
        } catch (e) {
            throw new InvalidTokenError("Invalid token specified: " + e.message);
        }
    }

    /*
     * Expose the function on the window object
     */

    //use amd or just through the window object.
    if (window) {
        if (typeof window.define == "function" && window.define.amd) {
            window.define("axios_post", function () {
                return axiosPost;
            });
        } else if (window) {
            window.axios_post = axiosPost;
        }
    }

})));
