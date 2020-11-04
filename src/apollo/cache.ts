import { InMemoryCache } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    // Query: {
    //   fields: {
    //     // todos: {
    //     //   merge(ex, ne) {
    //     //     console.log("eeexxxxxxx", ex);
    //     //     console.log("neeeeeeeeeeee", ne)
    //     //     if (ex) return { ...ne, todos: ex.todos }
    //     //     return ne;
    //     //   }
    //     // }
    //   }
    // }
  }
});
