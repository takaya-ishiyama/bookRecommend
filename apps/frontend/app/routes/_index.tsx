import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "book recommend" }];
};

export default function Index() {
  return (
    <div>
      <div className={"grid place-content-center"}>
        <div className="fade-in">
          <h1 style={{ fontSize: 30 }}>本との新しい縁を、ここから</h1>
          <div className={"grid place-content-center text-blue-500"}>
            <Link style={{ justifySelf: "center" }} to="/recommend">
              本を共有する
            </Link>
            <Link style={{ justifySelf: "center" }} to="/login">
              ログインしておすすめの本をきく
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
