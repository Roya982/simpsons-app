DROP TABLE charactars;

CREATE TABLE  IF NOT EXISTS charactars(
    id SERIAL NOT NULL,
    name VARCHAR (250),
    quote TEXT,
    image VARCHAR (300),
    characterDirection VARCHAR(250)
);
