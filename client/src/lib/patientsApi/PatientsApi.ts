import { getRequest } from "../buildClient/buildClient";

export const getAllPatients = async () => {
  try {
    const res = await getRequest("/patients");
    return res;
  } catch (error) {
    throw new Error("something went wrong..");
  }
};
