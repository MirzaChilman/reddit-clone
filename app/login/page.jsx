"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Login = () => {
  const handleLogin = async () => {
    const res = await fetch(`http://localhost:8080/users/1`);
    console.log({ res: res.json() });
  };
  return (
    <Card className="mx-auto mt-10 w-2/3 xl:w-1/3">
      <CardHeader>
        <CardTitle className="px-4">Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-10 py-5">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Username" />
        </div>
        <div>
          <Label htmlFor="username">Password</Label>
          <Input id="username" placeholder="Username" />
        </div>
      </CardContent>
      <CardFooter className="px-10 pb-5">
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
