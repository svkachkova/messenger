export type CreateUserResponse = {
    status: boolean;
    message: string;
};

export type LoginResponse = {
    status: boolean;
    message: string;
    token: string;
};

export type GetContactsResponse = {
    status: boolean;
    message: string;
    contacts: string[];
};

export type CreateContactsResponse = {
    status: boolean;
    message: string;
};
