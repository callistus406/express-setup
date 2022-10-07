const login = async (req, res) => {
  res.status(200).json({ success: true, payload: 'login route' });
};

module.exports = login;
