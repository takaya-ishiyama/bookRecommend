import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "book recommend" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul>
        <li>
          <a target="_self" href="./login">
            login
          </a>
        </li>
        <li>
          <a target="_self" href="./app/top">
            top
          </a>
        </li>
      </ul>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
