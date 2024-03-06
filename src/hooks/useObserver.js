import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();

		// using Intersection Observer API
		var cb = (entries, observer) => {
			if (entries[0].isIntersecting && canLoad) {  // event on element entry to viewport
				callback();
			}
		}
		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current)
	}, [isLoading])
}