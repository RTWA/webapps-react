import Badge from './Components/Badge';
import Banner from './Components/Banner';
import ConfirmDeleteButton from './Components/ConfirmDeleteButton';
import ConfirmDeleteModal from './Components/ConfirmDeleteModal';
import Icon from './Components/Icon';
import Input from './Components/Input';
import Link from './Components/Link';
import Loader from './Components/Loader';
import Switch from './Components/Switch';
import Scrollbar from './Components/Scrollbar';
import Sidebar from './Components/Sidebar';
import SidebarWrapper from './Components/SidebarWrapper';

import { NavChild, NavDropdown, NavItem, NavTitle } from './Components/NavElements/index';

import { Auth, AuthContext, withAuth, WebApps, WebAppsContext, withWebApps } from './Context/index';

import AppError from './Errors/AppError';
import NavigationError from './Errors/NavigationError';

import CreateElement from './Helpers/CreateElement';

const returnLibrary = () => {
    return {
        Badge,
        Banner,
        ConfirmDeleteButton,
        ConfirmDeleteModal,
        Icon,
        Input,
        Link,
        Loader,
        Switch,
        Scrollbar,
        Sidebar,
        SidebarWrapper,

        NavChild,
        NavDropdown,
        NavItem,
        NavTitle,

        Auth,
        AuthContext,
        withAuth,
        WebApps,
        WebAppsContext,
        withWebApps,

        AppError,
        NavigationError,

        CreateElement
    }
};

export default returnLibrary();