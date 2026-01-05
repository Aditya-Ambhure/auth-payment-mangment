// export default function SignupPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Sign Up</h1>
//     </div>
//   );
// }








import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      <Input type="text" placeholder="Full Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <Button>Create Account</Button>

      <div className="my-4 text-center">or</div>

      <Button>Sign up with Google</Button>
      <Button className="mt-2">Sign up with Facebook</Button>
    </div>
  );
}
