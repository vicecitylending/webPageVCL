import * as React from "react";
import { withTranslation, Link } from '../i18n'
  
const Menu = props => {
    const { category, categories } = props

    return <aside className="menu">
        <p className="menu-label">
            BUSCAR POR
        </p>
        <ul className="menu-list">
            {categories.map( (value) => {
                return <Link href={`/categoria/${value}`}>
                <li key={value}><a className={`${value === category && 'is-active'} `}>{value}</a></li>
            </Link>})}
        </ul>
  </aside>
}

export default Menu; 