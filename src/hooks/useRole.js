import { useEffect, useState } from "react"

const useRole = email => {
    const [role, setRole] = useState(null);
    const [isRoleLoading, setIsRoleLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(` https://reused-bargain-server-side-shubhoahmed.vercel.app/
users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRole(data.role);
                    setIsRoleLoading(false);
                })
        }
    }, [email])
    return [role, isRoleLoading]
}

export default useRole;