import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    birthDate: Date

    @Prop()
    country: string

    @Prop()
    city: string
}

export const UserSchema = SchemaFactory.createForClass(User);
