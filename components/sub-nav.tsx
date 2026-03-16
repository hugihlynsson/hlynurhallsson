import Link from 'next/link'

interface Item {
  href: string
  label: string
}

interface Props {
  items: Item[]
  current: string
}

const SubNav = ({ items, current }: Props) => (
  <nav className="sub-nav">
    {items.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={item.href === current ? 'sub-nav-current' : ''}
      >
        {item.label}
      </Link>
    ))}

    <style jsx global>{`
      .sub-nav {
        margin-bottom: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .sub-nav a {
        display: inline-block;
        text-decoration: none;
        color: black;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 2px 8px;
        transition: all 0.2s;
      }
      .sub-nav a:hover,
      .sub-nav .sub-nav-current {
        background-color: black;
        color: white;
      }
    `}</style>
  </nav>
)

export default SubNav
