const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { email, subscription, _id } = req.user;

  await User.findByIdAndUpdate(_id, req.body);

  res.json({ email, subscription });
};

module.exports = updateSubscription;
