module.exports = {
    stringifyLecture: function(lectureNumber) {
        var lectureString = '' + lectureNumber;
        // The static website uses the convention that lectures are always at least two digits
        if (lectureString.length < 2) {
            lectureString = '0' + lectureString;
        }
        return lectureString;
    }
};
