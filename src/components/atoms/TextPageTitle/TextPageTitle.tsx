import css from './TextPageTitle.module.scss'

export const TextPageTitle: React.FC = ({ children }) => <h1 className={css.root}>{children}</h1>
