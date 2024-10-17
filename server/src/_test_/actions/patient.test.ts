import request from "supertest";
import app from "../..";

it("can fetch a list of patients", async () => {
  const response = await request(app).post("/patients").send({
    name: "dilshad",
    age: 20,
    gender: "male",
  });
  expect(response.status).toBe(201);
  expect(response.body.name).toEqual("dilshad");
  expect(response.body.age).toEqual(20);
});
