import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';


const navigation = [
  { name: 'Dashboard', href: '/admin', current: false },
  { name: 'Users', href: '/admin/users', current: false },
  { name: 'Hotels', href: '/admin/hotels', current: false },
  { name: 'Languages', href: '/admin/languages', current: false },
  { name: 'Comodities', href: '/admin/comodities', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const HeaderAdmin = ({logStatus, role}) => {

    const location = useLocation().pathname;

    navigation.map((item) => ( 
        actualPage(item)
    ));

    function actualPage(item){
        if(item.href.toLocaleLowerCase().localeCompare(location.toLocaleLowerCase())===false ){
            item.current = true;
        }
    }

    const onClickLogout = () => {
        fetch('/auth/logout', {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.logout){
                logStatus(false);
            }
        }).catch(() => {
            logStatus(false);
        });
    }

    return(
        <>
             <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 items-center md:flex hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <FaTimes/>
                        ) : (
                            <FaBars/>
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex md:items-center md:justify-center items-stretch justify-start gap-8">
                        <div className="flex-shrink-0 flex items-center">
                        <img
                            className="md:hidden block h-8 w-auto pl-3"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                        <img
                            className="md:block hidden h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                        />
                        </div>
                        <div className="md:hidden block md:ml-6">
                        <div className="flex space-x-4">
                            {role===2 
                            ? navigation.map((item) => (
                                
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                                )) 
                            : <NavLink to="/admin/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</NavLink>}
                            
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                <Link
                                    to="/admin/profile"
                                    className=' block px-4 py-2 text-sm text-gray-700'
                                >
                                    Profile
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    onClick={onClickLogout}
                                    className=' block px-4 py-2 text-sm text-gray-700'
                                >
                                    Log out
                                </button>
                            </Menu.Item>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:flex hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 pl-2">{navigation.filter(item => item.current===true).map((item) => (item.name))}</h1>
                </div>
            </header>
        </> 
    )

}

export default HeaderAdmin;