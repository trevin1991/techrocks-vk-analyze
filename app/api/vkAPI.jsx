import axios from "axios";

const APP_ID = 5874401,     // app_id
      P_KEY = "ILMIyAH02LR9QjbPpNA7";   // private key

window.VK && VK.init({
    apiId: APP_ID
});

export default {
    login: () => {
        return new Promise((resolve, reject) => {
            VK.Auth.login((uData) => { resolve(uData); }/*, 6106527*/);
        });
    },

    getUserGroups: () => {
        return new Promise((resolve, reject) => {
            VK.Api.call("groups.get", { filter: "moder", fields: "members_count,description", extended: 1 }, function(groupsInfo) { resolve(groupsInfo.response); });
        });
    },

    getUserInfo: () => {
        return new Promise((resolve, reject) => {
            VK.Api.call("users.get", { fields: "first_name,last_name,crop_photo" }, function(profileInfo) { resolve(profileInfo.response[0]); });
        });
    }
}