CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'
CREATE EXTENSION IF NOT EXISTS 'pgcrypto'

CREATE TABLE IF NOT EXISTS list_users(
  uuid uuid DEFAULT uuid_generate_v4(),
  useremail VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  PRIMARY KEY (uuid)
)

INSERT INTO list_users ( useremail, password) VALUES ('marcos@test.com', crypt('test123', 'my_salt'))