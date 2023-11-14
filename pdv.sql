create database pdv;

create table
    usuarios (
        id serial primary key not null,
        nome text not null,
        email text unique not null,
        senha text not null
    );

create table
    categorias (
        id serial primary key not null,
        descricao text not null
    );

insert into
    categorias (descricao)
values ('Informática'), ('Celulares'), ('Beleza e Perfumaria'), ('Mercado'), ('Livros e Papelaria'), ('Brinquedos'), ('Moda'), ('Bebê'), ('Games');

create table
    produtos (
        id serial primary key,
        descricao text,
        quantidade_estoque int not null,
        valor int not null,
        categoria_id int references categorias(id)
    );

create table
    clientes(
        id serial primary key,
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


create table pedidos(
    id serial primary key,
    cliente_id int not null references clientes(id),
    observacao text,
    valor_total int not null
   );
   
create table pedido_produtos(
    id serial primary key,
    pedido_id int not null references pedidos(id),
    produto_id int not null references produtos(id),
    quantidade_produto int not null,
  	valor_produto int not null
   );
   
   
alter table produtos
add column produto_imagem text;