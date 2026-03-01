import axios from "axios";
// console.log("axios.create", import.meta.env.VITE_BACKEND_URL, axios.create);
// const Axios = axios.create({
// 	baseURL: import.meta.env.VITE_BACKEND_URL,
// 	// headers: {
// 	// 	"X-Requested-With": "XMLHttpRequest",
// 	// },
// 	withCredentials: false,
// });

const Axios = axios.create({
  	baseURL: "/", 
});

export const fetchProfiles = async () => {
	const res = await Axios.get("/json/profile.json");
	return res.data;
};

export default Axios;
