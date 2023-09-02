export enum Difficult {
    Easy,
    Medium,
    Hard
}
export enum Urgency {
    Low,
    High
}

export enum Importance {
    Low,
    High
}

export type TTask = {
    id: number,
    text: string,
    comment: string | null,
    difficult: Difficult,
    urgency: Urgency,
    importance: Importance,
    isComplete: boolean,
    deadlineAt?: Date | null,
    taskParentId: number | null,
    createAt: Date,
    updateAt: Date,
    tasks: TTask[] | null
}

export interface ITaskCreation {
    text: string,
    comment: string | null,
    difficult: Difficult,
    urgency: Urgency,
    importance: Importance,
    taskParentId: number | null,
    deadlineAt?: Date | null
}

export interface ITaskUpdate {
    value: boolean | string | number | null,
    id: number
}
