/**
 * Created by don on 6/30/17.
 */
const fs = require('fs');
const path = require('path');

/**
 * Filters a directory listing by filename extension.
 * @param {String} folder
 * @param {String} extension
 * @param {Function} callback
 * @return {Array} Array of file names {String} filtered by extension.
 */
module.exports = function filterLS(folder, extension, callback) {
    const ext = `.${extension.toLowerCase()}`;

    fs.readdir(folder, (err, ls) => {
        if (err) return callback(err);

        const arr = ls.filter((file) => {
            if (path.extname(file) === ext) return file;
        });

        callback(null, arr);
    });
};
