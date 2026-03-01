import profileData from "../json/profile.json";

console.log(profileData);

export const fetchProfiles = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(profileData), 100);
    });
};