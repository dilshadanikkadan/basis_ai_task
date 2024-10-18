import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../exceptions/not-found-error";
import * as repository from "../../src/repository/petients.repository";
import { getRandomMedicalList } from "../utils/getRandomMedicalList";
import { medicalHistoryData } from "../utils/medification.data";

export const getAllPatientsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    //after validating the req.body passing to repo layer
    const {pageNo,limit,name} = req.query;
    const response = await repository.getPatients(pageNo,limit,name);
    
    res.status(200).json(response);

  } catch (error) {
    next(error);
  }
};

export const createPatientsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    //after validating the req.body passing to repo layer
    const response = await repository.buildPatients({
      ...req.body,

      // mocking a random medical history from list
      medicalHistory: [getRandomMedicalList(medicalHistoryData)],
    });
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const getSinglePatientsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    //after validating the req.body passing to repo layer
    const response = await repository.getSinglePatient(req.params.id);
    res.status(200).json(response);

  } catch (error) {
    next(error);
  }
};
