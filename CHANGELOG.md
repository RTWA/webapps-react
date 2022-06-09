## Version 2.0.3
#### What's New?
- Added `<UserAvatar />` Component

#### What's Fixed?
- Selecting a drawer item, when on overlay mode, closes the overlay

#### What's Changed?
- Updated `<UserSuggest />` Component to use new `<UserAvatar />` Component

## Version 2.0.2
#### What's New?
- Added `<AppLoader />` Component
- Added `<Textarea />` Component
- Added `Queued` stage to `<AppActionButtons />` and `<PluginActionButtons />` Components

### What's Changed?
- UI improvements for `<ComponentError />` Error Boundary
- UI improvements for `<Input />` Component
- UI improvements for `<FlyoutContent />` Component
- `<Input />`, `<Switch />` and `<Select />` now accept the `label` prop as `string` or `object`

### What's Fixed?
- Fixed an issue with `<AzureGroupSearch />`

## Version 2.0.1
#### What's Changed?
- Various UI improvements
- Various speed improvements
- Various reliability improvements 

## Version 2.0.0
#### What's New?
- New `<AppPage />` Component
- New drawer functionality, with new components:
  - `<Drawer />`, `<DrawerHeader />`, `<DrawerItems />` and `<DrawerItem />`
- New `<DropDownItem >` Component
- New flyout functionality, with new components:
  - `<Flyout />`, `<FlyoutHeader />`, `<FlyoutContent>` and `<FlyoutFooter />`
- New `<HeaderBar />` Component
- New `<PageWrapper />` Component
- New `<WebAppsUX />` Context, with HOC (`withWebAppsUX`)

#### What's Changed?
- Sidebar UI has been updated and includes a new dark mode
- Updated UI for `<AppCard />` and `<PluginCard />` Components
- Updated UI for `<AppPluginChangelogModal />` Component
- `<Badge />` Component now has `shade` and `darkShade` properties
- BREAKING: `<Button />` Component `style` property is now `type`
- `<Button />` Component now has `shade` and `darkShade` properties
- `<Button />` Component now has a boolean `padding` property - defaults to true
- `<DropDownButton />` Component now has an `origin` property - defaults to `right`
- BREAKING: `<Loader />` Component `style` property is now `type`
- Security Updates
- Minor UI Updates
  
#### What's Fixed?
- When navigating in mobile view, selecting a menu option now hides the mobile menu


## Version 1.14.7
- Signout now redirects correctly when a server port is required

## Version 1.14.6
- (Actually) Fixed `ReferenceError: action is not defined` error for `<Switch />` Component

## Version 1.14.5
- Fixed `ReferenceError: action is not defined` error for `<Switch />` Component

## Version 1.14.4
- Fixed `Invalid argument supplied to oneOfType` error for `<Select />` Component
- Fixed `Invalid argument supplied to oneOfType` error for `<Input />` Component
- Fixed `ReferenceError: action is not defined` error for `<Select />` Component
- Fixed `ReferenceError: action is not defined` error for `<Input />` Component

## Version 1.14.3
- Fixed `actionLocation is not defined` error for `<Select />` Component

## Version 1.14.2
- Fixed `props` issue on `<UserSuggest />` Component

## Version 1.14.1
- Added `actionLocation` prop to `<Input />` Component
- Added `actionLocation` prop to `<Select />` Component
- Added `action` prop to `<Switch />` Component
- Added `wrapperClassName` prop to `<UserSuggest />` Component
  - Defaults to `relative mb-6`
- `<UserSuggest />` Component update to enable search by username or user's name

## Version 1.14.0
- Added `<ComponentError />` Boundary and `<ComponentErrorTrigger />` Component

## Version 1.13.3
- Fixed `<Auth />` Context `checkGroup` function

## Version 1.13.2
- Added `GridSelect` Component

## Version 1.13.1
- Added `credentials: 'include` to `APIClient` and `APIMediaClient` config
- Removed the `?logout` from the login redirect URL when a `401` status is received by `APIClient` or `APIMediaClient`. This will allow a user to automatically sign-in again, if Azure authentication is defaulted.

## Version 1.13.0
- Added `<AzureGroupSearch />` Component

## Version 1.12.2
- Fixed issue with `APIClient` handling a 401 error, rather than returning an error

## Version 1.12.1
- Dont' JSONify body data for `APIMediaClient`

## Version 1.12.0
- Added `APIMediaClient` for uploading media without a 'Content-Type' header

## Versoin 1.11.3, 1.11.4 & 1.11.5
- Fixed some SVG attributes in `<Icon />` Component

## Version 1.11.2
- `<Input />`, `<Select />` and `<Switch />` - `id` and `name` props updated to accept both `string` and `number`
- Fixed typeahead position for `<UserSuggest />` and `<DataSuggest />`

## Version 1.11.1
- Added additional attributes to `<Switch />` Component

## Version 1.11.0
- BREAKING: Removed `APIController` - you must now provide your own AbortController to `APIClient`
- Improved logic for `<ConfirmDeleteButton />` timer

## Version 1.10.3
- Fixed attribute issue with multiple Components

## Version 1.10.2
- Fixed attribute issue with `<Input />` and `<Select />` Components

## Versoin 1.10.1
- Fixed missing exports for `<ColorGridSelect />` and `<Select />` Components

## Version 1.10.0
- NEW: Added `<ColorGridSelect />` Component
- NEW: Added `<Select />` Component
- Updated `<Switch />` Component
- Updated `<Input />` Component
- Updated `<Loader />` Component
- Fixed `<DataSuggest />` Component with `labelKey` or `valueKey` being undefined error
- [See Documentation](https://docs.getwebapps.uk/v/developer-information/react-components/components)

## Version 1.9.2
- NEW: Added `<WebAppsDocs />` Context and `<WebAppsDocComponent />` Component

## Version 1.9.1
- Added `valueKey` and `labelKey` propers to `<DataSuggest />` Component

## Version 1.9.0
- NEW: Added `<DataSuggest />` Component
- Added mounted check to `<ConfirmDeleteButton />` on timers
- Added location change handle to `<AppError />` boundary

## Version 1.8.17
- Bug Fixed: `checkPermission` function of `<Auth />` Context

## Version 1.8.15 & 1.8.16
- `<Auth />` Context updated to functional component

## Version 1.8.14
- Add document check to `getCookie` helper
- Removed `isMounted` helper

## Version 1.8.12 & 1.8.13
- Bug fixes for `isMounted` helper
- Improved abort handling in `<WebApps />` and `<Auth />` Context

## Version 1.8.10
- Added `isMounted` helper
- Improved abort handling in `<WebApps />` and `<Auth />` Context

## Version 1.8.9
- Improved logging for `<WebApps />` Context

## Version 1.8.8
- Bug fixes for new `APIClient`

## Version 1.8.5, 1.8.6 & 1.8.7
- Improved errors produced by `APIClient`

## Version 1.8.2, 1.8.3 & 1.8.4
- Bug fixes for new `APIClient`

## Version 1.8.1
- Security Updates

## Version 1.8.0
- Removed Peer Dependency for Axios
- Added new `APIClient` fetch wrapper for making API calls
- Added new `APIController` fetch AbortController to be able to Abort running requests

## Version 1.7.6
- Fixed updating `App` or `Plugin` from the `<AppPluginChangelog />` Component
- General Improvements

## Version 1.7.5
- Remove ID check from `checkGroup` and `checkPermission` functions in `<Auth />` Context

## Version 1.7.4
- Fixed display of Plugin state if it is activated immediately after being installed
- Reduced version badge size on `<AppCard />` and `<PluginCard />`
- Fixed selection bug in `<UserSuggest />`
- Added `checkGroup` function to `<Auth />` Context

## Version 1.7.3
- Fixed Toast notifications causing errors when performing actions on Apps and Plugins

## Version 1.7.2
- Updated `Toasts` to inherit classes on container
- Updated `Toasts` to override color for action buttons

## Version 1.7.0
- Added toasts functionality - see [documentation](https://docs.getwebapps.uk/developers/react-components/components/toasts)

## Version 1.6.5
- Updated `<UserSuggest />` to prevent props errors in console

## Version 1.6.4
- Updated `<UserSuggest />` to add `...props` to the `<input />` element

## Version 1.6.3
- Added `checkPermission` function to `<Auth />` Context
- Added `<UserSuggest />` Component
- Improved text contrast on `<Button />` component when style is `full` (default)

## Version 1.6.2
- Skip interaction on Jest Testing for `<InfiniteScroll />`

## Version 1.6.1
- Fixed an issue toggling activation state of a Plugin with `<PluginActionButtons />`

## Version 1.6.0
- BREAKING: Updated peer requirements for `axios` to `>=0.24.0`
- Updated `<PluginCard />`, `<AppCard/ >`, `<PluginActionButtons />` and `<AppActionsButtons />` to implement a new card design
- Added CHANGELOG display for Apps and Plugins - `<AppPluginChangelogModal />`

## Version 1.5.1
- Fixed (2) Plugin activation/deactivation not updating in state for `<WebApps />` Context

## Version 1.5.0
- Removed unused `navigation.settings` from `<WebApps />` Context
- Fixed Plugin activation/deactivation not updating in state for `<WebApps />` Context

## Version 1.4.2 & 1.4.3
- Added `react-toast-notifications` to `<WebApps />` Context

## Version 1.4.1
- Updated `<ConfirmDeleteButton />` to prevent provided classNames overriding required ones
- Updated `<PluginCard />` and `<AppCard />` to support new repository data

## Version 1.4.0
- BREAKING: Dropped support for `<FontAwesomeIcon />` in `<Icon />` Component
- Fixed `<NavDropdown />` dropdown icon not showing
- Updated `<AppCard />` and `<PluginCard />` icon placement

## Version 1.3.4
- `<AppCard />` and `<PluginCard />` add required classes to the icons
- `<Icon />` returning SVG adds classes to the SVG and the wrapper `<div />`

## Version 1.3.2
- Bug Fixes

## Version 1.3.1
- Updated margins in `<ConfirmDeleteButton />`'s `SVG` element
- Added additional style `style="circle"` to `<Loader />` Component

## Version 1.3.0
- Updated margins in `<DropDownButton />` Component
- Updated margins in `<Button />` Component
- `<ConfirmDeleteButton />` now uses `<Button />` Component
  - Props change:
    - `initialClass` is now `initialColor` (default: 'red')
    - `confirmClass` is now `confirmColor` (default: 'orange')

## Version 1.2.9
- Updated `<NavDropdown />` Component
- Updated `<DropDownButton />` Component

## Version 1.2.8
- Bug fixes

## Version 1.2.7
- Added `<Button />` Component
- Added `<DropDownButton />` Component
- Added `<InfiniteScroll />` Component
- Added `<AppCard />` Component
- Added `<AppActionButtons />` Component
- Added `<PluginCard />` Component
- Added `<PluginActionButtons />` Component
- Updated `<NavItem />` Component

## Version 1.2.6
- Updated `<Icon />` Component
- Updated `<NavDropdown />` Component
  
## Version 1.2.5
- Updated `<Icon />` Component
- Updated padding in `<NavItem />` Component
- Updated padding in `<NavDropdown />` Component
- Updated padding in `<NavChild />` Component

## Version 1.2.4
- Updated `<Icon />` Component

## Version 1.2.3
- Updated `<Icon />` Component
- Updated `<NavItem />` Component
- Updated `<NavDropdown />` Component

## Version 1.2.2
- Updated `<NavItem />` Component
- Updated `<NavDropdown />` Component
- Updated `<Icon />` Component

## Version 1.2.1
- Updated `<Icon />` Component

## Version 1.2.0
- Updated `<NavItem />` to use `<Icon />` rather than `<FontAwesomeIcon />`
- Updated `<NavDropdown />` to use `<Icon />` rather than `<FontAwesomeIcon />`

## Version 1.1.34
- Updated `<WebApps />` Component

## Version 1.1.33
- Updated `<WebApps />` Component

## Version 1.1.32
- Fixed memory leak in `<WebApps />` Component

## Version 1.1.31
- Updated `<WebApps />` Component

## Version 1.1.30
- Updated `<Auth />` Context

## Version 1.1.29
- Updated `<Auth />` Context

## Version 1.1.28
- Added `UI.dark_mode` to `<WebApps />` Context
- Updated `<Auth />` Context

## Version 1.1.27
- Updated `<WebApps />` Component

## Version 1.1.26
- Updated `<WebApps />` Component
- Updated `<ConfirmDeleteButton />` Component

## Version 1.1.25
- Updated `<Input />` Component
- Updated `<WebApps />` Component

## Version 1.1.24
- Added `UI.theme` to `<Input />` Component
- Removed unnecessary console.log from `<NavDropdown />` Component
- Updated `<ConfirmDeleteButton />` Component
- Updated `<NavItem />` Component
- Updated `<NavDropdown />` Component
- Updated `<NavChild />` Component

## Version 1.1.23
- Fixed `<SidebarWrapper />` Component
- Removed unnecessary console.log from `<SidebarWrapper />` Component

## Version 1.1.22
- Fixed `<SidebarWrapper />` Component
- Fixed `<NavDropdown />` Component

## Version 1.1.21
- Fixed `<SidebarWrapper />` Component
- Fixed `<NavigationError />` Boundary
- Fixed `<NavDropdown />` Component

## Version 1.1.20
- Fixed `<SidebarWrapper />` Component
- Fixed `<NavigationError />` Boundary

## Version 1.1.19
- Removed the default `UI.theme` value of `indigo`

## Version 1.1.18
- Added `UI.theme` to `<WebApps />` Context
- Added basic test assertion for `<Sidebar />` Component
- Added `theme` prop to `<AppError />` boundary
- Used `UI.theme` in `<SidebarWrapper />` Component

## Version 1.1.17
- Fixed `<SidebarWrapper />` Component
- Fixed `<NavDropdown />` Component

## Version 1.1.16
- Fixed `<SidebarWrapper />` Component
- Fixed `<NavDropdown />` Component

## Version 1.1.15
- Fixed `<SidebarWrapper />` Component

## Version 1.1.14
- Fixed `<SidebarWrapper />` Component

## Version 1.1.13
- Fixed `<Sidebar />` Component

## Version 1.1.12
- Fixed `<Sidebar />` Component

## Version 1.1.11
- Updated `<Sidebar />` Component

## Version 1.1.10
- Fixed `<CreateElement />` Helper prop-types
- Fixed incorrect import in `<AppError />` boundary

## Version 1.1.9
- Fixed `<CreateElement />` Helper prop-types
- Fixed incorrect import in `<AppError />` boundary

## Version 1.1.8
- Fixed `<CreateElement />` Helper prop-types

## Version 1.1.7
- Fixed `<CreateElement />` Helper prop-types

## Version 1.1.6
- Added `<Loader />` Component
- Added `<Sidebar />` Component
- Added `<SidebarWrapper />` Component
- Added `<Scrollbar />` Component
- Added `<NavChild />` Component
- Added `<NavDropdown />` Component
- Added `<NavItem />` Component
- Added `<NavTitle />` Component
- Added `<AppError />` Error Boundary
- Added `<NavigationError />` Error Boundary
- Added `<CreateElement />` Helper
- Updated Auth to use new `<Loader />`