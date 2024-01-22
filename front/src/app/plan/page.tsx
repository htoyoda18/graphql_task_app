import { Footer } from "../../features/footer";
import { TaskCreate } from "../../features/task/task_create";

export default function Home() {
  return (
    <main>
        <TaskCreate />
        <Footer />
    </main>
  );
}
