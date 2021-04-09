import { sendData } from "next/dist/next-server/server/api-utils";
import Projects from "../../models/projects";

sendData = async (req, res) => {
  if (req.method === "GET") {
    const data = await Projects.findAll();
    res.status(200).json({ data });
  } else {
    console.log("nothing is here");
  }
};

export default sendData;
