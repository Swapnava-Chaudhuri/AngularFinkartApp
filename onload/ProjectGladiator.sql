drop table Emi cascade constraints;
drop table Purchase_Table cascade constraints;
drop table card_table cascade constraints;
drop table card_type_table cascade constraints;
drop table customer_table cascade constraints;
drop table login_table cascade constraints;
drop table product_table cascade constraints;
drop table registration_table cascade constraints;
drop sequence emi_seq ;
drop sequence purchase_seq ;

create table Emi (emi_id number(10,0) not null, balance double precision, date_of_payment date, is_paid number(1,0), purchase_id number(10,0), primary key (emi_id));
create table Purchase_Table (purchase_id number(10,0) not null, date_of_purchase date, emi_amount double precision, months number(10,0), username varchar2(255 char), product_id number(10,0), primary key (purchase_id));
create table card_table (card_number varchar2(255 char) not null, remaining_limit double precision, used_Limit double precision, valid_till date, card_type varchar2(255 char), primary key (card_number));
create table card_type_table (card_type varchar2(255 char) not null, credit_limit double precision, joining_fees double precision, primary key (card_type));
create table customer_table (username varchar2(255 char) not null, aadhar varchar2(255 char), address varchar2(255 char), Bank_Name varchar2(255 char), dob date, email varchar2(255 char), ifsc varchar2(255 char), name varchar2(255 char), pan varchar2(255 char), phone_no varchar2(255 char), savings_account varchar2(255 char), card_number varchar2(255 char), primary key (username));
create table login_table (username varchar2(255 char) not null, passowrd varchar2(255 char), type varchar2(255 char), primary key (username));
create table product_table (product_id number(10,0) not null, product_name varchar2(255 char), product_rate double precision, primary key (product_id));
create table registration_table (username varchar2(255 char) not null, aadhar varchar2(255 char), address varchar2(255 char), Bank_Name varchar2(255 char), card_type varchar2(255 char), cibil_score number(10,0), comments varchar2(255 char), dob date, email varchar2(255 char), ifsc varchar2(255 char), name varchar2(255 char), pan varchar2(255 char), phone_no varchar2(255 char), savings_account varchar2(255 char), Status varchar2(255 char), primary key (username));
alter table Emi add constraint FK_n56vpmwto3dsuxp0ts1gittpq foreign key (purchase_id) references Purchase_Table;
alter table Purchase_Table add constraint FK_hehkplxlplddwsls3725h7fsp foreign key (username) references customer_table;
alter table Purchase_Table add constraint FK_f6m3lcosyyplq3100s5r22e2r foreign key (product_id) references product_table;
alter table card_table add constraint FK_hd841d3dmm1t0mduio3y5gcyx foreign key (card_type) references card_type_table;
alter table customer_table add constraint FK_ojq985f7yey0v6xucp8lqrdyh foreign key (card_number) references card_table;
create sequence emi_seq
START WITH    234561
 INCREMENT BY   1
 NOCACHE
 NOCYCLE;
create sequence purchase_seq
START WITH     3144
 INCREMENT BY   1
 NOCACHE
 NOCYCLE;

insert into login_table (passowrd, type, username) values ( '12345','admin','swap');
insert into login_table (passowrd, type, username) values ( '12qwAS!@#','admin' ,'DeepakMittal7');
insert into login_table (passowrd, type, username) values ( 'lollipopXXX','admin','Abnv.agr' );
insert into login_table (passowrd, type, username) values ('Jalan@12345','admin','AnmolJalan');
insert into login_table (passowrd, type, username) values ('harsh0000','user','Harsh789');



insert into card_type_table (credit_limit, joining_fees, card_type) values ( 500000, 800,'platinum');
insert into card_type_table (credit_limit, joining_fees, card_type) values (300000, 500, 'gold');

insert into product_table (product_name, product_rate, product_id) values ('Apple Iphone', 66990, 21);
insert into product_table (product_name, product_rate, product_id) values ('Apple Airpods', 16499, 22);
insert into product_table (product_name, product_rate, product_id) values ('Sony Bravia', 63999, 23);
insert into product_table (product_name, product_rate, product_id) values ('Canon Camera', 30990, 24);
insert into product_table (product_name, product_rate, product_id) values ('KTM Duke', 276000, 25);
insert into product_table (product_name, product_rate, product_id) values ('Yamaha R15', 148480, 26);
insert into product_table (product_name, product_rate, product_id) values ('Sony Wireless Headphones', 19899, 27);
insert into product_table (product_name, product_rate, product_id) values ('HP Laptop', 176173, 28);
insert into product_table (product_name, product_rate, product_id) values ('Platinum Band',32802 , 29);
insert into product_table (product_name, product_rate, product_id) values ('Gold Band', 27802, 30);

select * from Emi ;
select * from Purchase_Table ;
select * from card_table ;
select * from card_type_table ;
select * from customer_table ;
select * from login_table ;
select * from product_table ;
select * from registration_table ;

commit;