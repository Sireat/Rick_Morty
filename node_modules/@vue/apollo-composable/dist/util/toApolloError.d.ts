import { ApolloError } from '@apollo/client/core/index.js';
import { GraphQLErrors } from '@apollo/client/errors/index.js';
export declare function toApolloError(error: unknown): ApolloError;
export declare function resultErrorsToApolloError(errors: GraphQLErrors): ApolloError;
