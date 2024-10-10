import { useEffect, useRef } from "react";

function usePrevious(value, initialRef = null) {
    const ref = useRef(initialRef);

    useEffect(() => {
        if (JSON.stringify(value) !== JSON.stringify(ref.current)) {
            ref.current = value;
        }
    });
    return ref.current;
}

export default usePrevious;