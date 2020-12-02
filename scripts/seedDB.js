const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const Seed = [
  {
    title: "The Wind-Up Bird Chronicle: A Novel",
    authors: ["Haruki Murakami"],
    description: "In a Tokyo suburb, a young man named Toru Okada searches for his wife’s missing cat—and then for his wife as well—in a netherworld beneath the city’s placid surface. As these searches intersect, he encounters a bizarre group of allies and antagonists. Gripping, prophetic, and suffused with comedy and menace, this is an astonishingly imaginative detective story, an account of a disintegrating marriage, and an excavation of the buried secrets from Japan’s forgotten campaign in Manchuria during World War II.",
    image: "http://books.google.com/books/content?id=A_mQPAqfte8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "https://books.google.com/books?id=A_mQPAqfte8C&newbks=1&newbks_redir=0&dq=windup+bird+chronicle&source=gbs_api",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(Seed))
  .then((data) => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
