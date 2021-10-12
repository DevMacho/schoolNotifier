let anouncements = []

export async function getAll(){
    return anouncements;
};

export async function postAnc(title, content){
    const data = {
        id : Date.now(),
        title : title,
        content : content
    }
    return anouncements = [data, ...anouncements];
};

export async function putAnc(id, title, content){
    const anouncement = anouncements.find((one)=>one.id == id);
    if(anouncement){
        anouncement.title = title;
        anouncement.content = content;
    }
    return anouncements;
}

export async function removeAnc(id){
    anouncements = anouncements.filter((t) => t.id != id);
}