const { CtrlWrapper } = require("../../helpers");

const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContacts = require("./addContacts");
const deleteContactById = require("./deleteContactById");
const updateContact = require("./updateContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAllContacts: CtrlWrapper(getAllContacts),
  getContactById: CtrlWrapper(getContactById),
  addContacts: CtrlWrapper(addContacts),
  deleteContactById: CtrlWrapper(deleteContactById),
  updateContact: CtrlWrapper(updateContact),
  updateFavorite: CtrlWrapper(updateFavorite),
};
