export interface Datum {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UsersInterface {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Datum[];
}