import {useState, useEffect} from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				setIsPending(false);
				setError(null);
			} catch(error) {
				setError(error.message);
				setData(null);
				setIsPending(false);
			}
		}
		fetchData();
	}, [url]);

	return {data, setData, isPending, setIsPending, error};
}

export default useFetch;