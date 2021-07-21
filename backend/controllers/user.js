const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models/');
const passValidator = require('password-validator');

// Schema de validation de mot de passe 
const schemaMp = new passValidator

schemaMp 
.is().min(3)
.is().max(20) 
.has().not().spaces()
.is().not().oneOf(['Passw0rd', 'Password123']);

exports.signup = (req, res, next) => {
  if (!schemaMp.validate(req.body.password)) {
    res.status(400).json({message:"Sécurité du mot de passe faible. 3 caractères sont requis"})
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
  models.user.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
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
    .catch(error => res.status(500).json({ error }));
};