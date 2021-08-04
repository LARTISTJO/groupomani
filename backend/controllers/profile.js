const models = require("../models/index");
const jwt = require("jsonwebtoken");


exports.getProfile = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;
 
  models.User.findOne({
    attributes: ["id", "email", "pseudo"],
    where: { id: req.params.id },
  })
    .then((user) => {
      if (user.id === userId ){ 
      res.status(200).json(user);
    } })
    .catch((error) => {
      res.status(404).json({
        error: error,
        message: "Utilisateur non trouvé !",
      });
    });
};

exports.getAllPostsProfile = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;

  models.Post.findAll({
    order: [["updatedAt", "DESC"]],
    attributes: [
      "id",
      "idUserp",
      "title",
      "content",
      "image",
      "createdAt",
      "updatedAt",
    ],
    where: { idUserp: userId },
  })
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteProfile = (req, res, next) => {
  models.User.destroy({ where: { id: req.params.id }, })
    .then(() =>  res.status(200).json({ message: "Utilisateur supprimé !", }))
    .catch((error) =>  res.status(400).json({ error: "L'utilisateur n'a pas pu être supprimé !", }));
  
};