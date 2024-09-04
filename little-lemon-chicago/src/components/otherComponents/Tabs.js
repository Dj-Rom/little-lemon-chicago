import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../../styles/components_styles/tabs.module.scss'
export const Tabs = ({ children }) => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {React.Children.map(children, (child) =>
          child.type === TabList
            ? React.cloneElement(child, { currentPath })
            : null
        )}
      </div>
      <div className={styles.tabPanels}>
        {React.Children.map(children, (child) =>
          child.type === TabPanel ? child : null
        )}
      </div>
    </div>
  )
}

export const TabList = ({ children, currentPath }) => {
  let isAnyTabActive = false

  const tabs = React.Children.map(children, (child, index) => {
    const isActive = child.props.to === currentPath
    if (isActive) {
      isAnyTabActive = true
    }
    return React.cloneElement(child, { isActive })
  })

  // If no tab matches the current path, set the first tab as active
  if (!isAnyTabActive && tabs.length > 0) {
    tabs[0] = React.cloneElement(tabs[0], { isActive: true })
  }

  return <div className={styles.tabList}>{tabs}</div>
}

export const Tab = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={isActive ? styles.activeTab : styles.tab}
    style={isActive ? { color: 'orange' } : { color: 'black' }}
  >
    {children}
  </Link>
)

export const TabPanel = ({ children }) => (
  <div className={styles.tabPanel}>{children}</div>
)
