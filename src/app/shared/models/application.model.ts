export interface ApplicationRequest {
    success: boolean;
    data?: Application;
}

export interface Application {
    application_id: string;
    email: string;
    first_name: string;
    last_name: string;
}
