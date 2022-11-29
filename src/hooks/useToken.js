import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    console.log('used token called', email);
    useEffect(() => {
        if (email) {
            fetch(` https://reused-bargain-server-side-shubhoahmed.vercel.app/
jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;