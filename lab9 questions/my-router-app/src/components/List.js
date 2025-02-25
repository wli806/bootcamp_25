import { useParams } from "react-router-dom";
import { useState } from "react";

const List = () => {
    const [List, setList] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "Doe" },
        { id: 3, name: "Jane" },
        { id: 3, name: "Jan" },
    ]);
    const params = useParams();

    return (
            <div>List-{params.id}</div>
            <ul>
                {
                    List.map((item, index) => (
                        <li key={item.id}>{item.name}</li>

                    ))
                }
            </ul>
        </div>
    );
}

export default List;