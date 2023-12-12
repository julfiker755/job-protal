import axios from "axios";

const axiosinstance = axios.create({
  baseURL:'https://job-protal.vercel.app',
});



const usePublicIncaptor = () => {
    return axiosinstance
};

export default usePublicIncaptor;