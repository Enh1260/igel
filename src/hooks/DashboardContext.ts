import { createContext } from "react";
import type { ITaskCreation } from "../types/task";

export type TDashboardContext = {
    createTask: (newTaskData: ITaskCreation) => void
}

const DashboardContext = createContext<TDashboardContext | null>(null)

export { DashboardContext }
