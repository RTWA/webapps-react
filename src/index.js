/** @jsxRuntime classic /
/* @jsx jsx */

import { client as APIClient, mediaClient as APIMediaClient } from './API';

import AzureGroupSearch from './Components/AzureGroupSearch';
import Badge from './Components/Badge';
import Banner from './Components/Banner';
import Button from './Components/Button';
import ColorGridSelect from './Components/ColorGridSelect';
import ConfirmDeleteButton from './Components/ConfirmDeleteButton';
import ConfirmDeleteModal from './Components/ConfirmDeleteModal';
import DataSuggest from './Components/DataSuggest';
import DropDownButton from './Components/DropDownButton';
import GridSelect from './Components/GridSelect';
import Icon from './Components/Icon';
import InfiniteScroll from './Components/InfiniteScroll';
import Input from './Components/Input';
import Link from './Components/Link';
import Loader from './Components/Loader';
import Scrollbar from './Components/Scrollbar';
import Select from './Components/Select';
import Sidebar from './Components/Sidebar';
import SidebarWrapper from './Components/SidebarWrapper';
import Switch from './Components/Switch';
import UserSuggest from './Components/UserSuggest';

import AppPluginChangelogModal from './Components/AppPluginChangelogModal';

import { AppCard, PluginCard } from './Components/Cards/index';
import { NavChild, NavDropdown, NavItem, NavTitle } from './Components/NavElements/index';

import { 
    Auth,
    AuthContext,
    withAuth, 

    WebAppsUX,
    WebAppsUXContext,
    withWebAppsUX,
    
    WebApps,
    WebAppsContext,
    withWebApps,
 } from './Context/index';

import AppError from './Errors/AppError';
import ComponentError, { ComponentErrorTrigger } from './Errors/ComponentError';
import NavigationError from './Errors/NavigationError';

import CreateElement from './Helpers/CreateElement';

import {
    DefaultToastContainer,
    DefaultToast,
    ToastConsumer,
    ToastProvider,
    withToastManager,
    useToasts,
} from './Toasts';

import {
    WebAppsDocComponent,
    WebAppsDocs,
    WebAppsDocsContext,
    withWebAppsDocs,
} from './Docs';

const returnLibrary = () => {
    return {
        APIClient,
        APIMediaClient,

        AzureGroupSearch,
        Badge,
        Banner,
        Button,
        ColorGridSelect,
        ConfirmDeleteButton,
        ConfirmDeleteModal,
        DataSuggest,
        DropDownButton,
        GridSelect,
        Icon,
        InfiniteScroll,
        Input,
        Link,
        Loader,
        Scrollbar,
        Select,
        Sidebar,
        SidebarWrapper,
        Switch,
        UserSuggest,

        AppPluginChangelogModal,

        AppCard,
        PluginCard,

        NavChild,
        NavDropdown,
        NavItem,
        NavTitle,

        Auth,
        AuthContext,
        withAuth,
        
        WebAppsUX,
        WebAppsUXContext,
        withWebAppsUX,

        WebApps,
        WebAppsContext,
        withWebApps,

        AppError,
        ComponentError,
        ComponentErrorTrigger,
        NavigationError,

        CreateElement,

        DefaultToastContainer,
        DefaultToast,
        ToastConsumer,
        ToastProvider,
        withToastManager,
        useToasts,

        WebAppsDocComponent,
        WebAppsDocs,
        WebAppsDocsContext,
        withWebAppsDocs,
    }
};

export default returnLibrary();