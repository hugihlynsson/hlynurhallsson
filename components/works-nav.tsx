import SubNav from './sub-nav'

const items = [
  { href: '/works/35', label: 'attitude' },
  { href: '/works/34', label: 'this' },
  { href: '/works/33', label: "Skildi' ég" },
  { href: '/works/32', label: 'new' },
  { href: '/works/31', label: 'glauben' },
  { href: '/works/30', label: 'preview' },
  { href: '/works/29', label: 'Neue Kunst' },
  { href: '/works/36', label: 'wm' },
  { href: '/works/28', label: 'pictures' },
  { href: '/works/27', label: 'again' },
  { href: '/works/26', label: 'colors' },
  { href: '/works/25', label: 'sojo' },
  { href: '/works/24', label: 'yamabiko' },
  { href: '/works/23', label: 'road movies' },
  { href: '/works/22', label: 'socker' },
  { href: '/works/21', label: 'la binnale' },
  { href: '/works/20', label: 'now' },
  { href: '/works/19', label: 'just' },
  { href: '/works/18', label: 'charlottenberg' },
  { href: '/works/17', label: 'artforum' },
  { href: '/works/16', label: 'set' },
  { href: '/works/15', label: 'von 12' },
  { href: '/works/14', label: 'kartografen' },
  { href: '/works/13', label: 'swim' },
  { href: '/works/12', label: 'ketilhús' },
  { href: '/works/11', label: 'movies' },
  { href: '/works/10', label: 'usa-eeu' },
  { href: '/works/9', label: 'thanks' },
  { href: '/works/8', label: 'the balcony' },
  { href: '/works/7', label: 'friends' },
  { href: '/works/6', label: 'vote' },
  { href: '/works/5', label: 'there' },
  { href: '/works/4', label: 'here' },
  { href: '/works/3', label: 'questions' },
  { href: '/works/2', label: 'streets' },
  { href: '/works/1', label: 'gúlp' },
]

interface Props {
  current: number
}

const WorksNav = ({ current }: Props) => (
  <SubNav items={items} current={`/works/${current}`} />
)

export default WorksNav
