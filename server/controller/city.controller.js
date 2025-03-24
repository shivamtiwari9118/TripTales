const { City } = require("../models/city.model");

const createCity = async (req, res) => {
  const { city, country, review, facilities, description, image } = req.body;
  try {
    const ndata = await City.create({
      city,
      country,
      review,
      facilities,
      description,
      image,
    });
    if (!ndata) {
      return res.status(400).json({ error: "Invalid data" });
    }
    res.json(ndata);
  } catch (e) {
    return res.status(500).json({ error: "Failed to add city" });
  }
};

const allCity = async (req, res) => {
  try {
    const ndata = await City.find({});
    if (!ndata) {
      return res.status(400).json({ error: "Data not found" });
    }
    res.json(ndata);
  } catch (e) {
    return res.status(500).json({ error: "Failed to fetch city" });
  }
};

const specificCity = async (req, res) => {
  const { id } = req.params;
  try {
    const ndata = await City.findOne({ _id: id });
    if (!ndata) {
      return res.status(400).json({ error: "Data not found" });
    }
    res.json(ndata);
  } catch (e) {
    return res.status(500).json({ error: "Failed to fetch city" });
  }
};

module.exports = { createCity, allCity, specificCity };
