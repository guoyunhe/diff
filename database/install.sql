-- link table
-- the only usage of this table is to merge links, move links
CREATE TABLE IF NOT EXISTS `link`
(
    id INT(32) UNSIGNED NOT NULL AUTO_INCREMENT,
    -- extremely long URLs are too troublesome
    -- without "http://" or "https://"
    -- e.g. zh.wikipedia.org/wiki/GNU
    url VARCHAR(512) NOT NULL,
    deleted BOOLEAN DEFAULT FALSE,
    merged BOOLEAN DEFAULT FALSE,
    merged_link_id INT(32) UNSIGNED,
    PRIMARY KEY (id),
    INDEX url (url)
)
ENGINE=InnoDB DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';

-- diff table
CREATE TABLE IF NOT EXISTS diff
(
    id INT(64) UNSIGNED NOT NULL AUTO_INCREMENT,
    link_id_a INT(32) UNSIGNED NOT NULL,
    link_id_b INT(32) UNSIGNED NOT NULL,
    deleted BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id),
    INDEX link_id_a (link_id_a),
    INDEX link_id_b (link_id_b)
)
ENGINE=InnoDB DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';

-- user table
CREATE TABLE IF NOT EXISTS `user`
(
    id INT(32) UNSIGNED NOT NULL AUTO_INCREMENT,
    twitter_oauth_token VARCHAR(32) NOT NULL,
    twitter_oauth_token_secret VARCHAR(32) NOT NULL,
    deleted BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id),
    INDEX twitter_oauth_token (twitter_oauth_token)
)
ENGINE=InnoDB DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';

-- rating table
CREATE TABLE IF NOT EXISTS rating
(
    id INT(64) UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT(32) UNSIGNED NOT NULL,
    diff_id INT(64) UNSIGNED NOT NULL,
    rating INT(6) UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    INDEX user_id (user_id),
    INDEX diff_id (diff_id)
)
ENGINE=InnoDB DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';