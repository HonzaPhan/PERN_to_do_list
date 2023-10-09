import axios from "axios";

export const GetToDoAPI = async () => {
  try {
    const userEmail = "honzaphan98@gmail.com";

    const response = await axios
      .get(`http://localhost:8000/todos/${userEmail}`)
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
