//three options to display the database url. .env || global db_url || link to a local db host
exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/restaurants-app';
exports.PORT = process.env.PORT || 8080;