import "../../../../styles/HomePage.css"
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="button-container">
                <button onClick={() => navigate("/skill_graph")}>
                    Skill Graph
                </button>
                <button onClick={() => navigate("/rarity_preview")}>
                    Rarity Preview
                </button>
            </div>
        </div>
    )
}