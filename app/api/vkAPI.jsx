const APP_ID = 5801213;     // app_id
const P_KEY = "kZ2dI8so0pih16gEnpLy";   // private key

window.VK && VK.init({
    apiId: APP_ID
});

export default {
    login: () => {
        return new Promise((resolve, reject) => {
            VK.Auth.login((uData) => { resolve(uData); });
        });
    },

    getUserInfo: () => {
        return new Promise((resolve, reject) => {
            console.log("call to getProfileInfo");
            VK.api("account.getProfileInfo", {}, (profileInfo) => { resolve(profileInfo); });
        });
    }
}