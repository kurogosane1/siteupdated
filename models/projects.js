import mongoose from "mongoose";
const { Schema } = mongoose;

const Projects = new Schema({
  title: { type: String },
  description: { type: String },
  image_url: { type: String },
  web_link: { type: String },
  githubLink: { type: String },
});

module.exports.projects = mongoose.model("Projects", Projects);
