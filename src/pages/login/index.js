import LoginPage from "@/components/login/LoginPage";
import { AdminLayout } from "@/layout/AdminLayout";

export default function Login() {
  return (
    <AdminLayout>
      <LoginPage />
    </AdminLayout>
  );
}
