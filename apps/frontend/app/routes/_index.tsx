import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "book recommend" }];
};

export default function Index() {
  return (
    <div>
      <div className={"grid place-content-center"}>
        <h1 className="fade-in" style={{ fontSize: 30 }}>
          本との新しい縁を、ここから
        </h1>
      </div>
    </div>
  );
}
