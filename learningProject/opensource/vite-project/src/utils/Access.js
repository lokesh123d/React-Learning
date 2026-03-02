import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function useAccessRole(path) {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === 'randomtokenlkdsjflkjwoernnlkv') {
            navigate(path);
        } else {
            navigate('/login');
        }
    }, [navigate, path]);
}

export default useAccessRole;