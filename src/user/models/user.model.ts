import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    firtname: String,
    lastname: String,
    age: String,
    id: String,
    coordinate: String,
    // created_at: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
    // timestamps: {
    //   createdAt: 'created_at',
    //   updatedAt: 'updated_at',
    // },
    collection: 'posts',
  },
);

export { UserSchema };

export interface Post extends Document {
  firtname: string;
  lastname: string;
  age: string;
  id: string;
  coordinate: string;
}
