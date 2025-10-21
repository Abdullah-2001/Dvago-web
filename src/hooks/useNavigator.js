import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNavigator = () => {

    const navigate = useNavigate();
    const goTo = useCallback((path, options = {}) => navigate(path, options), [navigate]);
    const goHome = useCallback(() => navigate("/"), [navigate]);
    const goBack = useCallback(() => navigate(-1), [navigate]);
    const goToCategories = useCallback(() => navigate("/categories"), [navigate]);
    
    return {
        navigate,
        goTo,
        goHome,
        goBack,
        goToCategories
    };

};

export default useNavigator;