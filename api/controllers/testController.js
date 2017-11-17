exports.getTest = async (req, res) => {
    res.json({ it: 'Hello World!'});
  };

  exports.home = async (req, res) => {
    res.render('index');
  };