import request from "supertest";
import app from "../..";

it("can fetch a list of patients", async () => {
  const response = await request(app).get("/patients")
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toEqual(true)
});
