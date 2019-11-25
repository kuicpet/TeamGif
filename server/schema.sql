CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(255),
    jobRole VARCHAR(255),
    department VARCHAR(255),
    address VARCHAR(255)
    );

CREATE TABLE gifs (
    gifId SERIAL PRIMARY KEY,
    gifTitle VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
    );

CREATE TABLE articles (
    articleId SERIAL PRIMARY KEY,
    articleTitle VARCHAR(255),
    article VARCHAR,
    date_created TIMESTAMP
    );   

CREATE TABLE comments (
    commentId SERIAL PRIMARY KEY,
    comment VARCHAR(255),
    authorId SERIAL REFERENCES users(userId),
    date_created TIMESTAMP
    );
CREATE TABLE feed (
    gifs SERIAL REFERENCES gifs(gifId),
    articles SERIAL REFERENCES articles(articleId)
);