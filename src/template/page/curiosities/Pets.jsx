import React from 'react'
import './Pets.css'
import ColorContent from '../../components/ColorContent'

export default props =>
    <ColorContent title="Animais" titleDesc="Gosta de animais? Descreva-os.">
        <p>
            Gosto muito. Atualmente tenho dois: <br/>um cão <a href="https://www.petz.com.br/cachorro/racas/lhasa-apso/" target="_blank">lhasa-apso</a> chamado
            Shiryu e uma <br/>  calopsita macho chamado <a href="https://pt.wikipedia.org/wiki/Nymphicus_hollandicus" target="_blank">Schevchenko</a>. <br/> Os dois são
            bastante travessos!
        </p>
    </ColorContent>