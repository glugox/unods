import { Button } from "@uno/core";
import { useIsomorphicLayoutEffect } from "@uno/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Uno docs page");
  }, []);
  return (
    <div>
      <h1>Uno Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
