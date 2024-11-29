const app = require("./server");

export default async function handler(req, res) {
  // Forward requests to the Express app
  await app(req, res);
}
