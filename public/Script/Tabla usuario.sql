-- Table: public.usuario

-- DROP TABLE IF EXISTS public.usuario;

CREATE TABLE IF NOT EXISTS public.usuario
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    "contraseña" character varying COLLATE pg_catalog."default",
    correo character varying COLLATE pg_catalog."default",
    CONSTRAINT pk_id_user PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario
    OWNER to postgres;