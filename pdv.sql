create database pdv;

create table usuarios (
  id serial primary key not null,
  nome text not null,
  email text unique not null,
  senha text not null
  );
  
 create table categorias (
   id serial primary key not null,
   descricao text not null
   );
   
   insert into categorias
   (descricao)
   values
   ('Informática'),
   ('Celulares'),
   ('Beleza e Perfumaria'),
   ('Mercado'),
   ('Livros e Papelaria'),
   ('Brinquedos'),
   ('Moda'),
   ('Bebê'),
   ('Games')
   ;

create table produtos (
    id primary key serial,
    descricao text,
    quantidade_estoque int not null,
    valor int not null,
    categoria_id int references categorias(id)
   );

   create table clientes(
    id primary key serial,
    nome text,
    email text unique not null,
    cpf text unique not null,
    cep text,
    rua text,
    numero text,
    bairro text,
    cidade text,
    estado text
   );