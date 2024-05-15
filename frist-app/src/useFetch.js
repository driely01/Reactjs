import {useState, useEffect} from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const abortCont = new AbortController();
		setTimeout(() => { // just simulating the fetch large data.
			fetch(url, {signal: abortCont.signal})
				.then((res) => {
						if (!res.ok)
								throw Error('could not fetch the data for that resource');
					return res.json();
				})
				.then(data => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch(err => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					} else {
						setError(err.message);
						setIsPending(false);
						setData(null);
					}
				});
		}, 100)
		return () => abortCont.abort();
	}, [url]);
	return {data, setData, isPending, error};
}

export default useFetch;