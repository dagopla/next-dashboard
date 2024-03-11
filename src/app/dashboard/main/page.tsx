import { SimpleWidget, WidgetsGrid } from "@/components";

export default function MainPage() {
  return (
    <div>
      <h1 className="mt-2 test-3xl">Dashboard</h1>
      <span>Información general</span>
      <WidgetsGrid/>
    </div>
  );
}