/**
 * This function managing get data from local-storage
 * @param {*} LS_name local-storage name
 * @returns {Array} array of data
 */
export function storageManager_get(LS_name){
    // 0) Check the local-storage
    storageManager_storageValidation(LS_name)

    // 1) Get content of ls, and pars it to json, then return it
    return JSON.parse(localStorage.getItem(LS_name))

}

/**
 * This function managing adding data to local-storage
 * @param {*} LS_name local-storage name
 * @param {*} value data value
 */
export function storageManager_add(LS_name, value){
    // 0) Check the local-storage
    storageManager_storageValidation(LS_name)

    // 1) Get content of ls, and pars it to json
    let ls = JSON.parse(localStorage.getItem(LS_name))

    // 2) Add new value to local-storage
    ls.push(value)

    // 3) Stringify data, and send data to local-storage
    localStorage.setItem(LS_name, JSON.stringify(ls))

}

/**
 * This function managing removing data from local-storage
 * @param {*} LS_name local-storage name
 * @param {*} id data id
 */
export function storageManager_remove(LS_name, id){
    // 0) Check the local-storage
    storageManager_storageValidation(LS_name)

    // 1) GEt all data from local-storage
    const ls = storageManager_get(LS_name)

    // 2) 
    ls.forEach(
        function(eachTask, indexNumber){
            if (eachTask.id === id){
                ls.splice(indexNumber, 1)
                return

            }
        }
    );

    // 3) Send data to local-storage
    localStorage.setItem(LS_name, JSON.stringify(ls))

}

/**
 * This function check local-storage, if is empty put an empty array is value.
 * @param {*} LS_name local-storage name
 */
function storageManager_storageValidation(LS_name){
    // 1) Get content of local-storage
    const ls = localStorage.getItem(LS_name)

    // 2) If null: Create New Local-Storage
    if (!ls){
        localStorage.setItem(LS_name, "[]")
        console.warn(`[INFO][create][local-storage]: Name of local-storage: ${LS_name}`)

    }
}