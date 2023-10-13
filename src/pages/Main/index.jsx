import { Button } from "../../components";
import { axiosInstance } from "../../apis";

const Main = () => {
  const getJobList = () => {
    axiosInstance
      .get("/news/1")
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return <Button onClick={getJobList}>api</Button>;
};

export default Main;
