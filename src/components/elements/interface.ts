export interface Item extends fabric.IImageOptions {
    url: string;
    id: string;
    children: Item[];
    parentId: string;
}
export interface Elements {
    id: string;
    title: string;
    element: Item[];
}
