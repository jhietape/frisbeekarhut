import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});
export default instance;
