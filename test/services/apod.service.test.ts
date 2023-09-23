import { Axios } from "axios";
import { getApod } from "../../src/services/apod.service";
import { apodMock } from "../../test/mocks/apod/apodMocks";

describe('Apod Service', () => {
    const httpGetSpy = jest.spyOn(Axios.prototype, 'get')

    beforeEach(() => {
        jest.clearAllMocks()
        httpGetSpy.mockResolvedValue({
            status: 200,
            data: apodMock
        })
    })

    it('Should return an valid apod with date', async () => {
        const params = {
            date: '2023-09-22'
        }
        const apod = await getApod(params)

        expect(apod).toEqual({
            explicacion: apodMock.explanation,
            fecha: apodMock.date,
            titulo: apodMock.title,
            url: apodMock.url
        })
    })
})