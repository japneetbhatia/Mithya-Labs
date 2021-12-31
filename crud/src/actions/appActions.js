export const add = data => {
    return {
        type : "add",
        operate : data
    }
}

export const edit = data => {
    return {
        type : "edit",
        operate : data
    }
}

export const Delete = index => {
    return {
        type : "delete",
        operate : index
    }
}