exports.getTest = async (req, res) => {
    res.json({ it: 'Hello Zenfolio!'});
  };

  exports.home = async (req, res) => {
    res.render('index');
  };