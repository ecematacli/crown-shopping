#!/bin/sh

apollo codegen:generate --localSchemaFile=graphql.schema.json --target=typescript --includes='graphql/**/*.ts' --tagName=gql --addTypename --globalTypesFile=types/graphql-global-types.ts types