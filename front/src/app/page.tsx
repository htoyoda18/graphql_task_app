import { Footer } from "../features/footer";
import { TaskList } from "../features/task/task_list";

export default function Home() {
  return (
    <main>
      <TaskList />
      <Footer />
    </main>
  );
}
