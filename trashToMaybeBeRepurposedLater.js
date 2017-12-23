const routes = [
  {
    path: "/",
    exact: true,
    title: "Home title",
    description: "Home description"
  },
  { path: "/about", title: "About title", description: "About description" },
  { path: "/topics", title: "Topics title", description: "Topics description" },
  { path: "/topics/:id", title: "" }
];

const Head = () => {
  return (
    <Router history={history}>
      <>
        {routes.map(route => (
          <Route
            exact={route.exact}
            path={route.path}
            key={route.path}
            render={() => (
              <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={route.description} />
                <title>{route.title}</title>
              </>
            )}
          />
        ))}
      </>
    </Router>
  );
};
