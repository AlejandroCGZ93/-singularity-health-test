import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { Button } from './ui/button';

export function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 bg">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium transition-colors hover:text-primary bg-w  text-white"
                onClick={() => navigate('/home/location')}
              >
                Location
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium transition-colors hover:text-primary text-white"
                onClick={() => navigate('/home/blog')}
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium transition-colors hover:text-primary text-white"
                onClick={() => navigate('/home/services')}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium transition-colors hover:text-primary text-white"
                onClick={() => navigate('/home/aboutus')}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink
                className="text-sm font-medium transition-colors hover:text-primary text-white"
                onClick={() => navigate('/home/franchise')}
              >
                Franchise with Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <Button 
              onClick={handleLogout} 
              className="text-sm font-medium transition-colors hover:bg-[#FF6347] bg-[#FF6347] text-white"
            >
              Logout
            </Button>

          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </div>
  );
}