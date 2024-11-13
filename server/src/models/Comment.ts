import { Schema, type Document } from 'mongoose';

export interface CommentDocument extends Document {
  comment: [string];
}

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const commentSchema = new Schema<CommentDocument>({
  comment: [String],
});

export default commentSchema;
