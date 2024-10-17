import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PatientInfo from "@/components/pages/PatientDetails/PatientInfo";
import useRequest from "@/hooks/useRequest";

jest.mock("../../../hooks/useRequest");

const mockFetchData = jest.fn();

const patientData = {
    name: "Nahid",
    age: 20,
    phone: "123-456-7890",
    gender: "Male",
    condition: "Asthma",
    status: "Critical",
    medicalHistory: ["2018: Surgery", "2020: Asthma Treatment"],
  };


describe("pateint Component", () => {
    beforeEach(() => {
        (useRequest as jest.Mock).mockReturnValue({
          data: patientData,
          loading: false,
          error: null,
          fetchData: mockFetchData,
        });
      });
  it("renders table names correctly", () => {
    render(<PatientInfo />);
    
    expect(screen.getByText("Nahid")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});
