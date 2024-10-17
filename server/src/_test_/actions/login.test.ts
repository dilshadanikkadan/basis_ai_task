import request from "supertest";
import app from "../..";


it('returns 200 if credential ok with login',async()=>{
    await request(app)
    .post("/auth/register")
    .send({
      userName: "dilshad",
      password: "dilshad4321@",
    })  
    .expect(200)

    await request(app).post('/auth/login').send({
        userName: "dilshad",
        password: "dilshad4321@",
    }).expect(200)
})

