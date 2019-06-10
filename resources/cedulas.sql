-- ----------------------------
-- Table structure for fisicos2
-- ----------------------------
DROP TABLE IF EXISTS "public"."fisicos2";
CREATE TABLE "public"."fisicos2" (
  "cedula" varchar(510) COLLATE "pg_catalog"."default",
  "apellido1" varchar(510) COLLATE "pg_catalog"."default",
  "apellido2" varchar(510) COLLATE "pg_catalog"."default",
  "nombre1" varchar(510) COLLATE "pg_catalog"."default",
  "nombre2" varchar(510) COLLATE "pg_catalog"."default",
  "Administracion" varchar(510) COLLATE "pg_catalog"."default",
  "clasificacion" varchar(510) COLLATE "pg_catalog"."default",
  "apellidos" varchar(510) COLLATE "pg_catalog"."default",
  "nombre" varchar(510) COLLATE "pg_catalog"."default",
  "nombre_juri" varchar(510) COLLATE "pg_catalog"."default",
  "id" int8,
  "createdAt" varchar(510) COLLATE "pg_catalog"."default",
  "updatedAt" varchar(510) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."fisicos2" OWNER TO "apis";

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "login" varchar(510) COLLATE "pg_catalog"."default",
  "password" varchar(510) COLLATE "pg_catalog"."default",
  "createdAt" varchar(510) COLLATE "pg_catalog"."default",
  "updatedAt" timestamp(6),
  "id" int8
)
;
ALTER TABLE "public"."users" OWNER TO "apis";
