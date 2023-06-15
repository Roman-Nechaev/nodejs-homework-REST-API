const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;

  const skip = (page - 1) * limit;

  let result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");

  if (favorite) {
    result = await Contact.find({ owner, favorite }, "-createdAt -updatedAt", {
      skip,
      limit,
      favorite,
    }).populate("owner", "email subscription");
  }

  res.status(200).json(result);
};

module.exports = getAllContacts;
