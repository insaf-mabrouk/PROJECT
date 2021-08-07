 const isArtistOrAdmin = (req, res, next) => {
    if (req.user && (req.user.isArtist || req.user.isAdmin)) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin/Seller Token' });
    }
  };

  module.exports = isArtistOrAdmin