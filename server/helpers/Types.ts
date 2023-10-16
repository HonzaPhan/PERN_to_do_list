import { QueryArrayResult, QueryResult } from "pg";

// GET ALL TODOS
export interface GetAllToDosRequest {
  params: {
    userEmail: string;
  };
}

export interface GetAllToDosResponse {
  json: (arg0: any[]) => void;
}

// CREATE TODO
export interface CreateNewToDoRequest {
  body: {
    user_email: string;
    title: string;
    progress: string;
  };
}

export interface CreateNewToDoResponse {
  json: (arg0: QueryArrayResult<any[]>) => void;
}

// UPDATE TODO
export interface UpdateToDoRequest {
  params: {
    id: number;
  };
  body: {
    user_email: string;
    title: string;
    progress: string;
  };
}

export interface UpdateToDoResponse {
  json: (arg0: QueryResult<any>) => void;
}

// DELETE TODO
export interface DeleteToDoRequest {
  params: {
    id: number;
  };
}

export interface DeleteToDoResponse {
  json: (arg0: QueryResult<any>) => void;
}

// LOGIN
export interface LoginControllerRequest {
  body: {
    email: string;
    password: string;
  };
}

export interface LoginControllerResponse {
  json: (arg0: {
    detail?: string;
    email?: string;
    token?: string;
  }) => void;
  status: (arg0: number) => any;
}

// SIGN UP
export interface SignUpSuccessResponse {
  email: string;
  token: string;
}

export interface SignUpControllerRequest {
  body: {
    email: string;
    password: string;
  };
}

export interface SignUpControllerResponse {
  json: (arg0: string | { detail: string } | SignUpSuccessResponse) => void;
}