
USE db_urchin

DROP TABLE tbl_versoin;
CREATE TABLE IF NOT EXISTS tbl_versoin (
  id INT UNSIGNED AUTO_INCREMENT,
  url VARCHAR (128) NOT NULL,
  newsVersionCode INT NOT NULL,
  isForceUpdate INT,
  PRIMARY KEY (id)
) ENGINE = INNODB DEFAULT CHARSET = utf8 ;

SELECT * FROM tbl_versoin;
DESC tbl_versoin;

