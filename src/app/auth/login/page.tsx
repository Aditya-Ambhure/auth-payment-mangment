// export default function LoginPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Login</h1>
//     </div>
//   );
// }







import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <Button>Login</Button>

      <div className="my-4 text-center">or</div>

      <Button>Continue with Google</Button>
      <Button className="mt-2">Continue with Facebook</Button>
    </div>
  );
}
