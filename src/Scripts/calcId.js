let calcId = (name) => {
    let id = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] != " ") {
            id += name[i];
        }
    }

    console.log(id);
    return id;
}

export default calcId;