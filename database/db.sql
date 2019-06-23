create database crud_node;

use crud_node;

create table customers(
    id int(6) unsigned  auto_increment,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15),
    primary key(id)
);

show tables;

describe custumers;