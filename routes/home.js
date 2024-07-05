const home = () => {
    const html = '<html>' + 'Drive Safe App' + '</html>';
    return  res.send(html);// json(html);

}

module.exports = {home};