// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import PostModel from "../../models/PostModel";

PostModel.create({
  title: "Post 1",
  description: "post 1 desscription",
  content: "post 1 content",
});

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
