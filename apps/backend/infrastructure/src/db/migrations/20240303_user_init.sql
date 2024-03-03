CREATE TABLE users (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    public_id VARCHAR(6) DEFAULT LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0') UNIQUE, 
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP

);

CREATE TABLE session (
    user_id uuid REFERENCES users(id) PRIMARY KEY,
    access_token VARCHAR(255) NOT NULL,
    refresh_token VARCHAR(255),
    expiration_timestamp TIMESTAMP NOT NULL,
    expiration_timestamp_for_refresh TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);


CREATE INDEX idx_session_user_id ON session(user_id);
CREATE INDEX idx_session_access_token ON session(access_token);

INSERT INTO users (id, public_id,username, password)
VALUES
  ('17b5ac0c-1429-469a-8522-053f7bf0f80d', 'abc123', 'test', 'password');