import { Schema, model } from "mongoose";
import { medicalHistorySchema } from "./medical.history.model";
import { Password } from "../services/password/password.service";

interface UsertEntity {
  userName: string;
  password: string;
  role: string;
}

const userSchema = new Schema(
  {
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default:"healthProvider"
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (done) {
    if (this.isModified("password")) {
      const hashed = await Password.toHash(this.get("password") as string);
      this.set("password", hashed);
    }
    done();
  });
export const UserModel = model<UsertEntity>("users", userSchema);
