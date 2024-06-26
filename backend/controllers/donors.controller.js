const Donor = require("../models/Donor");

exports.index = async (req, res, next) => {
  const donors = await Donor.find();
  res.json(donors);
};

exports.show = async (req, res) => {
  const donor = await Donor.findById(req.params.id);
  res.json(donor);
};

exports.store = async (req, res) => {
  const donor = await Donor.create(req.body);
  res.json(donor);
};

exports.update = async (req, res) => {};

exports.delete = async (req, res) => {};
