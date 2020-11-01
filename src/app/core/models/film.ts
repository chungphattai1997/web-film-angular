export class Film {
    id ?: number;
    title: string;
    trailer: string;
    detail: string;
    date_opening: string;
    rate: number;
    image;
    id_category: number;
    
    constructor(title: string, trailer: string, detail: string, date_opening: string, rate: number, id_category: number) {
        this.title = title;
        this.trailer = trailer;
        this.detail = detail;
        this.date_opening = date_opening;
        this.rate = rate;
        this.id_category = id_category;
    }
}