import Api from "./async";
import axios from 'axios';

jest.mock('axios');
const dataForGET = [{firstExample: '1'}, {secondExample: '2'}];
const dataForPOST = {message: 'job success'};

const respForGET = {data: dataForGET};
const respForPOST = {data: dataForPOST};

describe('Api', () => {
    let api: Api | null = null;
    beforeAll(() => {
        api = new Api('https://example.com');
        (axios as unknown as {mockResolvedValueOnce: any}).mockResolvedValueOnce(respForGET);
        (axios as unknown as {mockResolvedValueOnce: any}).mockResolvedValueOnce(respForPOST);
        (axios as unknown as {mockRejectedValue: any}).mockRejectedValue(new Error('another error'));
    })
    test('отправка GET запроса', async() => {
        const response = api !== null && await api.apiRequest('get', '/example', null, {param: 'firstParam'})
        expect(response).toStrictEqual(dataForGET)
    });
    test('отправка POST запроса', async() => {
        const response = api !== null && await api.apiRequest('post', '/example', {example: 'firstParam'}, null)
        expect(response).toStrictEqual(dataForPOST)
    })
    test('обработка ошибки API', async() => {
        const response = () => api !== null && api.apiRequest('post', '/example', {example: 'firstParam'}, null)
        await expect(response).rejects.toThrow('another error')
    })
})