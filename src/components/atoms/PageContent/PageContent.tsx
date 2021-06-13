import css from './PageContent.module.scss'

export const PageContent: React.FC = ({ children }) => (
  <div className={css.root}>
    <div className={css.rootInner}>
      <div className={css.content}>
        <div className={css.contentInner}>{children}</div>
      </div>
    </div>
  </div>
)
