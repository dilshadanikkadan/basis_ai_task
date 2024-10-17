import React, { useState } from "react";
import { X, Calendar, FileText } from "lucide-react";
import { postRequest } from "../../../lib/buildClient/buildClient";
import { useParams } from "react-router-dom";

interface PriorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PriorForm: React.FC<PriorFormProps> = ({ isOpen, onClose }) => {
  const [treatmentType, setTreatmentType] = useState<string>("");
  const [insurancePlan, setInsurancePlan] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [dateOfService, setDateOfService] = useState("");
  const [diagnosisCode, setDiagnosisCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ treatmentType, insurancePlan, dateOfService, diagnosisCode });

    if (treatmentType.trim().length < 3 || insurancePlan.trim().length < 3) {
      setError("Please Check the format of inputs");
      return;
    }
    if (diagnosisCode.trim().length < 5) {
      setError("diagnosisCode need 5 min");
      return;
    }
    const resposne = await postRequest("/priorRequest", {
      treatmentType,
      insurancePlan,
      dateOfService,
      diagnosisCode,
      patientId: "6710deaa6d78f32802598e37",
    });
    console.log(resposne);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 bg-gray-100 rounded-t-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Prior Request
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label
              htmlFor="treatmentType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Treatment Type
            </label>
            <input
              type="text"
              id="treatmentType"
              placeholder="eg: Phycical Therappy"
              value={treatmentType}
              onChange={(e) => setTreatmentType(e.target.value)}
              className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="insurancePlan"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Insurance Plan
            </label>
            <input
              type="text"
              placeholder="eg: gold plan"
              id="insurancePlan"
              value={insurancePlan}
              onChange={(e) => setInsurancePlan(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="dateOfService"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Service
            </label>
            <div className="relative">
              <input
                type="text"
                id="dateOfService"
                placeholder="eg: 22-10-2024"
                value={dateOfService}
                onChange={(e) => setDateOfService(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Calendar
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="diagnosisCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Diagnosis Code
            </label>
            <div className="relative">
              <input
                type="text"
                id="diagnosisCode"
                placeholder="eg: 7856570"
                value={diagnosisCode}
                onChange={(e) => setDiagnosisCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <FileText
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-[#8f1925] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriorForm;
