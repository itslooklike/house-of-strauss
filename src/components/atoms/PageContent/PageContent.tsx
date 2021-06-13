import css from './PageContent.module.scss'

export const PageContent: React.FC = ({ children }) => (
  <div className={css.root}>
    <div className={css.content}>{children}</div>
  </div>
)
