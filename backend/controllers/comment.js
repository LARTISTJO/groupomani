const models = require("../models");
const jwt = require("jsonwebtoken");

exports.createComment = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;

  if (req.body.comment === "") {
    return res
      .status(400)
      .json({ error: "Veuillez remplir le champ commentaire." });
  }

  models.Comment.create({
    idUsers: userId,
    idPost: req.params.id,
    comment: req.body.comment,
  })
    .then(() => res.status(200).json({ message: "Commentaire enregistré !" }))
    .catch((error) => res.status(500).json(error));
};

exports.getAllComment = (req, res, next) => {
  models.Comment.findAll({
    where: {
      idPost: req.params.id,
    },
    order: [["updatedAt", "DESC"]],
    include: [
      {
        model: models.User,
        attributes: ["pseudo"],
      },
    ],
  })
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteComment = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;
  const isAdmin = decodedToken.isAdmin;

  models.Comment.findOne({
    where: {
      idPost: req.params.idPost,
      id: req.params.id,
    },
  }).then((comment) => {
    if (comment.idUsers === userId || isAdmin === true) {
      comment
        .destroy()
        .then(() => {
          res.status(200).json({
            message: "Commentaire supprimé !",
          });
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
            message: "Le commentaire n'a pas pu être supprimé",
          });
        });
    }
  });
};