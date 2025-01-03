"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("firebase/auth");
var auth = (0, auth_1.getAuth)();
var button = document.querySelector('button');
(0, auth_1.onAuthSateChanged)(auth, function (user) {
    if (user == null) {
        return;
    }
    console.log(user);
});
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (clickEvent) {
    (0, auth_1.signInWithRedirect)(auth, new auth_1.GoogleAuthProvider());
});
