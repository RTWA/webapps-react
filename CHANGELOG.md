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
- 
  
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
- 
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