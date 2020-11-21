#!/bin/sh

apollo codegen:generate --localSchemaFile=graphql.schema.json --target=typescript --includes='src/graphql/**/*.ts' --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types