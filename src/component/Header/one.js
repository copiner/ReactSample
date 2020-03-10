import { renderRoutes } from "react-router-config";

const One = ({ route }) => (
  <div>
    <h1>One</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);
