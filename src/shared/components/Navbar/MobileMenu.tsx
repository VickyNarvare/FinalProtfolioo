import { Link } from 'react-router';
import { navigation } from './navigation';

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) =>
  open ? (
    <nav
      aria-label="Mobile"
      className="fixed inset-0 z-30 flex flex-col justify-center gap-3 bg-background px-5 lg:hidden"
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className="text-6xl font-extrabold tracking-tighter"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  ) : null;

export default MobileMenu;
