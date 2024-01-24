"use client"

import { Footer } from "../../features/footer";
import { TaskUpdate } from "../../features/task/task_edit";

type Props = {
    params: {
      id: string
    }
  }

export const Page = (props: Props) => {
  return (
    <main>
        <Footer />
        <TaskUpdate taskID={props.params.id} />
    </main>
  );
}

export default Page