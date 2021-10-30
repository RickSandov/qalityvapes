
import ActiveLink from '../ActiveLink'

export default function SubcategoriesMenu({ category, subcategories }) {


    return (
        <div className="side-menu">
            {
                subcategories.map(subctg => {

                    if (subctg) {
                        return (
                            <ActiveLink activeClassName={'side-menu__item active'} key={subctg} href={`/${category}/${subctg}`} >
                                <a className="side-menu__item" >
                                    {subctg}
                                </a>
                            </ActiveLink>
                        )
                    }

                    return null

                })
            }
        </div>
    )
}
