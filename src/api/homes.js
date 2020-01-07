import database from 'config/utils/configureFirebase'

export const getFirebase = () => {
    return database.database().ref('upload')
        .once('value')
        .then( result => {
            return {
                ...result.val()
            }
        })
};