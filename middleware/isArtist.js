const isArtist = (req, res, next) => {
    if (req.user && req.user.isArtist) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Artist Token' });
    }
  };

  module.exports = isArtist