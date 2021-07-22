const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

// Schema de validation de mot de passe  et de mail
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;


exports.signup = (req, res, next) => {
  if (
    req.body.email == "" || req.body.pseudo == "" || req.body.password == "") {
    return res
      .status(400)
      .json({ error: "Merci de remplir tous les champs !" });
  }
  if (!regexMail.test(req.body.email))

  { return res.status(400).json({ error: "Email incorrect !" }); }

  if (!regexPassword.test(req.body.password)) {
    return res.status(401).json({
      error:
        "Minimum: 1 majuscule, 1 minuscule, 1 chiffre et 6 caractères",
    });
  }

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = models.User.create({
        email: req.body.email,
        pseudo: req.body.pseudo,
        password: hash,
        isAdmin:false,
      })
      .then ((user) => {
        res.status (201).json({
          userId: user.id,
          isAdmin: user.isAdmin,
        });
      })
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  if (req.body.email == null || req.body.password == null) {
    return res
      .status(400)
      .json({ error: "Veuillez remplir tous les champs !" });
  }

  models.User.findOne({ 
    where: { email: req.body.email, }, 
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(402).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user.id,
            pseudo: user.pseudo,
            token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
};