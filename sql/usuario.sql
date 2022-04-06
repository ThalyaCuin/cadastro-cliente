create database WEBII;

use WEBII;

create table usuario(
id  int(11) not null auto_increment,
nome varchar(50) null default null,
senha varchar(50) null default null,
primary key(id)
);

INSERT INTO usuario (nome,senha) values ('thalya','5646hbgvyhhgvfghfh');
insert into usuario (nome,senha) values ('alex','jbjkbjk66545415645');

SELECT * FROM usuario;

update usuario set nome='alec' where id=1;
update usuario set nome='thay' where id=2;

delete from usuario where id=1;