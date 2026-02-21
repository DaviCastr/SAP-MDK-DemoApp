/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CustomersDeleteConfirmation(clientAPI) {

    return clientAPI.executeAction('/DemoApp/Actions/CustomerDelete.action').then((result) => {

        if (result.data) {

            return clientAPI.executeAction('/DemoApp/Actions/CustomersDeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));

        } else {

            return Promise.reject('User Deferred');

        }

    });

}
