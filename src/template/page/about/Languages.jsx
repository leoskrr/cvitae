import React from 'react'
import './Languages.css'

import ColorContent from '../../components/ColorContent'

export default props =>
    <ColorContent title="Idiomas" titleDesc="Spoken / Written / Reading">
        <p>Português</p>
        <div className="progress-bar">
            <div className="portuguese">
                <p>Fluente</p>
            </div>
        </div>
        <p>Inglês</p>
        <div className="progress-bar">
            <div className="english">
                <p>Intermediário ~ Avançado</p>
            </div>
        </div>
        <p>Italiano</p>
        <div className="progress-bar">
            <div className="italian">
                <p>Iniciante</p>
            </div>
        </div>
    </ColorContent>