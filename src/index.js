import Badge from './Components/Badge';
import Banner from './Components/Banner';
import ConfirmDeleteButton from './Components/ConfirmDeleteButton';
import ConfirmDeleteModal from './Components/ConfirmDeleteModal';
import Icon from './Components/Icon';
import Input from './Components/Input';
import Link from './Components/Link';
import Switch from './Components/Switch';

import { Auth, AuthContext, withAuth, AuthenticatedRoute, UnauthenticatedRoute, WebApps, WebAppsContext, withWebApps } from './Context/index';

const returnLibrary = () => {
    return {
        Badge: Badge,
        Bannner: Banner,
        ConfirmDeleteButton: ConfirmDeleteButton,
        ConfirmDeleteModal: ConfirmDeleteModal,
        Icon: Icon,
        Input: Input,
        Link: Link,
        Switch: Switch,

        Auth: Auth,
        AuthContext: AuthContext,
        withAuth: withAuth,
        AuthenticatedRoute: AuthenticatedRoute,
        UnauthenticatedRoute: UnauthenticatedRoute,
        WebApps: WebApps,
        WebAppsContext: WebAppsContext,
        withWebApps: withWebApps
    }
};

export default returnLibrary();