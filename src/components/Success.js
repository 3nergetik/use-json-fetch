import React from 'react';
import useJsonFetch from "../hooks/JsonFetch";

function Success({url}) {
    const {data, loading, error} = useJsonFetch(url);

    if (loading) return "Загрузка...";
    if (error) {
        console.log('error', error);
        return null;
    }

    return (
        <>
            {data || "Успешно"}
        </>
    )
}

export default Success;