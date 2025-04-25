import React, { useState, useEffect } from "react"

const GetProduct: React.FC = () => {
    const [data, setData] = useState<{Title: string; Descript: string; Price: string}[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/data");
                const result = await response.json();
                setData(result)
            }catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <h1>Данные с сервера</h1>
            <div className="flex gap-2">
                {data.map((item) => (
                    <div className="bg-blue-300">
                        <p>Название: {item.Title}</p>
                        <p>Описание: {item.Descript}</p>
                        <p>Цена: {item.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default GetProduct;