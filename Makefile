# Makefile

# 開発サーバの立ち上げ
up-api:
	cd api && rails server -p 4000

.PHONY: up-api

up-front:
	cd front && yarn dev

.PHONY: up-front


# GraphQLのスキーマからコードを生成する
front-codegen:
	cd front && npx graphql-codegen

.PHONY: codegen
