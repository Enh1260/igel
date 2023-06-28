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
    text: string,
    comment?: string,
    difficult: Difficult,
    urgency: Urgency,
    importance: Importance,
    isActive: boolean,
    deadline?: Date | null
}