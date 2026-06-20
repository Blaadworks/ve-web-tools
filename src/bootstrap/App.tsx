import "../../styles/App.css"
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../features/base/components/HomePage.tsx";
import { SkillGraphPage } from "../features/skill_graph/components/SkillGraphPage.tsx";
import { RarityPreviewPage } from "../features/rarity-preview/components/RarityPreviewPage.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/skill_graph" element={<SkillGraphPage/>}/>
            <Route path="/rarity_preview" element={<RarityPreviewPage/>}/>
        </Routes>
    )
}