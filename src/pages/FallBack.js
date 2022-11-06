import React from "react";
import Button from "../components/Button";

function FallBack({ error, resetErrorBoundary }) {
  return (
    <div className="page-not-found">
      <h1>OOPS!!!</h1>
      <div>
        <p>{error.message}</p>
        <Button
          backgroundColor="steelblue"
          color="white"
          onClick={resetErrorBoundary}
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default FallBack;
