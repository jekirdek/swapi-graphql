import "@/styles/globals.css";
import "@/styles/fun.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
//   cache: new InMemoryCache(),
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }
