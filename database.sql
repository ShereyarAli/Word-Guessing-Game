use userdata;
create table user(
	user_id int not null primary key auto_increment,
	user_name varchar(255) ,
    user_email varchar(255),
    user_pass varchar(255)
);

