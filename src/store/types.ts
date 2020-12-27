export interface DataTypes {
    type: string;
    data: any;
}

export interface PostDataTypes {
    type: string;
    postData: any;
}

export interface LoadingTypes {
    type: string;
    loading: boolean;
}

export interface ErrorTypes {
    type: string;
    error: boolean;
}

export interface LoadUpTypes {
    type: string;
}

export interface AddNewObjectTypes {
    title: string;
    body: string;
}

export interface AddNewTypes {
    type: string;
    content: AddNewObjectTypes;
}

export interface LoadPostDataTypes {
    type: string;
    id: string;
}
