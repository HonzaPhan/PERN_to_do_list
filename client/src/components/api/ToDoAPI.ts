import axios from "axios";

export const API_URL = import.meta.env.VITE_SERVERURL;

export const GetToDoAPI = async () => {
  try {
    const userEmail = "honzaphan98@gmail.com";

    const response = await axios
      .get(`${API_URL}/todos/${userEmail}`)
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
