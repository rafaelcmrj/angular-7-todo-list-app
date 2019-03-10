export interface TaskRequest {
    data: Task;
    success: boolean;
}

export interface Task {
    application_id: string;
    task_id: number;
    task_name: string;
    editing?: boolean;
}

export interface ListTasksRequest {
    data: Array<Task>;
    success: boolean;
}