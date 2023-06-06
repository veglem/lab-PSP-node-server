class DataManager {
    async get(url, callback) {
        try {
            const response = await fetch(url, {method: 'GET'})
            const result = await response.json()
            return callback(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export const manager = new DataManager();