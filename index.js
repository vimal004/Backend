//CRUD OPERATIONS MONGO DB
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://2004vimal:zaq1%40wsx@cluster0.6tktuqx.mongodb.net/sample_mflix"
  )
  .then(() => {
    console.log("Mongo DB has been connected successfully!");
  })
  .catch((err) => {
    console.log("Error in connecting to the Mongo DB", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  plot: String,
  genres: [String],
  runtime: Number,
  rated: String,
  cast: [String],
  num_mflix_comments: Number,
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    dvd: Date,
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    lastUpdated: Date,
    consensus: String,
    rotten: Number,
    production: String,
    fresh: Number,
  },
});

const Movies = mongoose.model("Movies", movieSchema);

const User = mongoose.model("User", userSchema);

const createUser = async () => {
  try {
    const user = new User({
      name: "Vimal Manoharan",
      email: "vm570@srmist.edu.in",
      password: "Zaq1@wsx1234",
    });
    const result = await user.save();
    console.log(result);
  } catch {
    console.log("Error occured");
  }
};

const findUser = async () => {
  try {
    const result = await User.find({ name: "Vimal Manoharan" }).limit(1);
    console.log(result);
  } catch {
    console.log("Error occured. No records found");
  }
};

const findMovie = async () => {
  const result = await Movies.find({
    runtime: { $gte: 100 },
  }).select({ title: 1 });
  console.log(result);
};

const deleteUser = async () => {
  const result = await User.deleteOne({ _id: "59b99db4cfa9a34dcd7885b6" });
  console.log(result);
};

const deleteMovies = async () => {
  const result = await Movies.deleteMany({ runtime: { $gte: 150 } });
  console.log(result);
};

const updateUserdetails = async () => {
  const result = await User.updateOne({
    _id: "59b99dcbcfa9a34dcd7885e4",
    $set: {
      name: "Vimal M",
    },
  });
  console.log(result);
};

updateUserdetails();
