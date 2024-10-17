import { PatientModel } from "../models/petients.model";

export const buildPatients = async (payload: any) => {
  const newPatients = new PatientModel({
    ...payload,
  });
  const result = await newPatients.save();
  return result;
};

export const getPatients = async (pageNo?: any, limit?: any, name?: any) => {

  const result = await PatientModel.find();
  const _pageNo = Number(pageNo);
  const _limit = Number(limit);
  const totalCount = await PatientModel.countDocuments();
  
  if (name) {
    return await PatientModel.find({ name: { $regex: name, $options: "i" } })
      .skip((_pageNo - 1) * limit)
      .limit(_limit);
  }

  if (_pageNo > Math.ceil(totalCount / 2)) {
    return result;
  }
  if (pageNo == "undefined" || limit == "undefined") {
    return result;
  }

  return await PatientModel.find()
    .skip((_pageNo - 1) * limit)
    .limit(_limit);
};

export const getSinglePatient = async (id: string) => {
  const result = await PatientModel.findOne({ _id: id });
  return result;
};
