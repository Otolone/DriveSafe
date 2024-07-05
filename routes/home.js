const home = (req, res) => {
    const html = '<html>' + 'Drive Safe App' + '</html>';
    return  res.send();// json(html);

}

module.exports = {home};