/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CustomerOrderCount(clientAPI) {

    const currentCustomer = clientAPI.getPageProxy().binding['@odata.readLink'];

    return clientAPI.count(
        '/DemoApp/Services/com_sap_edm_sampleservice_v4.service',
        currentCustomer + '/SalesOrders',
        ''
    ).then((count) => {

        return count;
    
    });

}
