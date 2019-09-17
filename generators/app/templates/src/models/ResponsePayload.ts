import ResponseError from './ResponseError'

type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N

/**
 * Expected API response payload.
 */
type ResponsePayload<T = {}> = Merge<
	T,
	{
		errors: Array<Omit<ResponseError, 'message' | 'name'>>
	}
>

export default ResponsePayload
