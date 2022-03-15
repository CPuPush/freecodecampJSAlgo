class Book{
    constructor(author, hal){
        this._author = author;
        this._hal = hal;
    }
    //getter
    get writer(){
        return this._author;
    }
    get hal(){
        return this._hal;
    }
    //setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
    set hal(updateHalaman){
        this._hal = updateHalaman;
    }
}
const novel = new Book('anonymous', 70);
console.log(novel.writer);
console.log(novel["hal"]);
novel.writer = 'newAuthor';
console.log(novel.writer);
console.log(typeof(novel));