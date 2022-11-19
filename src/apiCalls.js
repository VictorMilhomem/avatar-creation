const options = (http_method) => {
    return {
        method: http_method,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
            'X-RapidAPI-Host': process.env.REACT_APP_HOST
        }
    }
}

const url = (endpoint) => {
    return `${process.env.REACT_APP_URL}` + endpoint
}

export const fetchAssetsType = async (bodyType) => {
    try {
        const response = await fetch(url('assets/' + bodyType), options('GET'))
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const fetchBodyType = async () => {
   
    try {
        const response = await fetch(url('bodytypes'), options('GET'))
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const fetchListAssets = async (assetType, bodyType) => {
    try {
        const response = await fetch(url('assets/' + bodyType + '/' + assetType), options('GET'))
        const body = response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const createAvatar = async (bodyType) => {
    try {
        const response = await fetch(url('avatar/' + bodyType), options('POST'))
        const body = await response.json()
        return body
    } catch (error) {
       console.log(error) 
    }
}

export const deleteAvatar = async (id) => {
    try {
        const response = await fetch(url('avatar/' + id), options('DELETE'))
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const addAssetItem = async (id, item) => {
    try {
        const response = await fetch(url('avatar/' + id + '/' + item), options('PUT'))
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const addAssetColor = async (id, assetType, color) => {
    try {
        const response = await fetch(url('avatar/' + id + '/' + assetType, + '/' + color),
            options('PUT'))
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const removeAsset = async (id, assetType) => {
    try {
        const response = await fetch(url('avatar/' + id + '/' + assetType), options('PUT'))
        const body = await response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

export const setSkinColor = async (id, color) => {
    try {
        const response = await fetch(url('avatar/' + id + '/' + color), options('PUT'))
        const body = response.json()
        return body
    } catch (error) {
        console.log(error)
    }
}

