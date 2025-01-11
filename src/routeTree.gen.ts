/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as StaffImport } from './routes/staff'
import { Route as ReportsImport } from './routes/reports'
import { Route as ProductsImport } from './routes/products'
import { Route as OrdersImport } from './routes/orders'
import { Route as FinancerecordsImport } from './routes/financerecords'
import { Route as FeedbackImport } from './routes/feedback'
import { Route as EmployeeReportsImport } from './routes/employeeReports'
import { Route as EmployeeFeedbackImport } from './routes/employeeFeedback'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as CustomersImport } from './routes/customers'
import { Route as AboutusImport } from './routes/aboutus'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const StaffRoute = StaffImport.update({
  path: '/staff',
  getParentRoute: () => rootRoute,
} as any)

const ReportsRoute = ReportsImport.update({
  path: '/reports',
  getParentRoute: () => rootRoute,
} as any)

const ProductsRoute = ProductsImport.update({
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const OrdersRoute = OrdersImport.update({
  path: '/orders',
  getParentRoute: () => rootRoute,
} as any)

const FinancerecordsRoute = FinancerecordsImport.update({
  path: '/financerecords',
  getParentRoute: () => rootRoute,
} as any)

const FeedbackRoute = FeedbackImport.update({
  path: '/feedback',
  getParentRoute: () => rootRoute,
} as any)

const EmployeeReportsRoute = EmployeeReportsImport.update({
  path: '/employeeReports',
  getParentRoute: () => rootRoute,
} as any)

const EmployeeFeedbackRoute = EmployeeFeedbackImport.update({
  path: '/employeeFeedback',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const CustomersRoute = CustomersImport.update({
  path: '/customers',
  getParentRoute: () => rootRoute,
} as any)

const AboutusRoute = AboutusImport.update({
  path: '/aboutus',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/aboutus': {
      id: '/aboutus'
      path: '/aboutus'
      fullPath: '/aboutus'
      preLoaderRoute: typeof AboutusImport
      parentRoute: typeof rootRoute
    }
    '/customers': {
      id: '/customers'
      path: '/customers'
      fullPath: '/customers'
      preLoaderRoute: typeof CustomersImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/employeeFeedback': {
      id: '/employeeFeedback'
      path: '/employeeFeedback'
      fullPath: '/employeeFeedback'
      preLoaderRoute: typeof EmployeeFeedbackImport
      parentRoute: typeof rootRoute
    }
    '/employeeReports': {
      id: '/employeeReports'
      path: '/employeeReports'
      fullPath: '/employeeReports'
      preLoaderRoute: typeof EmployeeReportsImport
      parentRoute: typeof rootRoute
    }
    '/feedback': {
      id: '/feedback'
      path: '/feedback'
      fullPath: '/feedback'
      preLoaderRoute: typeof FeedbackImport
      parentRoute: typeof rootRoute
    }
    '/financerecords': {
      id: '/financerecords'
      path: '/financerecords'
      fullPath: '/financerecords'
      preLoaderRoute: typeof FinancerecordsImport
      parentRoute: typeof rootRoute
    }
    '/orders': {
      id: '/orders'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof OrdersImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/reports': {
      id: '/reports'
      path: '/reports'
      fullPath: '/reports'
      preLoaderRoute: typeof ReportsImport
      parentRoute: typeof rootRoute
    }
    '/staff': {
      id: '/staff'
      path: '/staff'
      fullPath: '/staff'
      preLoaderRoute: typeof StaffImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/aboutus': typeof AboutusRoute
  '/customers': typeof CustomersRoute
  '/dashboard': typeof DashboardRoute
  '/employeeFeedback': typeof EmployeeFeedbackRoute
  '/employeeReports': typeof EmployeeReportsRoute
  '/feedback': typeof FeedbackRoute
  '/financerecords': typeof FinancerecordsRoute
  '/orders': typeof OrdersRoute
  '/products': typeof ProductsRoute
  '/reports': typeof ReportsRoute
  '/staff': typeof StaffRoute
  '/users': typeof UsersRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/aboutus': typeof AboutusRoute
  '/customers': typeof CustomersRoute
  '/dashboard': typeof DashboardRoute
  '/employeeFeedback': typeof EmployeeFeedbackRoute
  '/employeeReports': typeof EmployeeReportsRoute
  '/feedback': typeof FeedbackRoute
  '/financerecords': typeof FinancerecordsRoute
  '/orders': typeof OrdersRoute
  '/products': typeof ProductsRoute
  '/reports': typeof ReportsRoute
  '/staff': typeof StaffRoute
  '/users': typeof UsersRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/aboutus': typeof AboutusRoute
  '/customers': typeof CustomersRoute
  '/dashboard': typeof DashboardRoute
  '/employeeFeedback': typeof EmployeeFeedbackRoute
  '/employeeReports': typeof EmployeeReportsRoute
  '/feedback': typeof FeedbackRoute
  '/financerecords': typeof FinancerecordsRoute
  '/orders': typeof OrdersRoute
  '/products': typeof ProductsRoute
  '/reports': typeof ReportsRoute
  '/staff': typeof StaffRoute
  '/users': typeof UsersRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/aboutus'
    | '/customers'
    | '/dashboard'
    | '/employeeFeedback'
    | '/employeeReports'
    | '/feedback'
    | '/financerecords'
    | '/orders'
    | '/products'
    | '/reports'
    | '/staff'
    | '/users'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/aboutus'
    | '/customers'
    | '/dashboard'
    | '/employeeFeedback'
    | '/employeeReports'
    | '/feedback'
    | '/financerecords'
    | '/orders'
    | '/products'
    | '/reports'
    | '/staff'
    | '/users'
  id:
    | '__root__'
    | '/'
    | '/aboutus'
    | '/customers'
    | '/dashboard'
    | '/employeeFeedback'
    | '/employeeReports'
    | '/feedback'
    | '/financerecords'
    | '/orders'
    | '/products'
    | '/reports'
    | '/staff'
    | '/users'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutusRoute: typeof AboutusRoute
  CustomersRoute: typeof CustomersRoute
  DashboardRoute: typeof DashboardRoute
  EmployeeFeedbackRoute: typeof EmployeeFeedbackRoute
  EmployeeReportsRoute: typeof EmployeeReportsRoute
  FeedbackRoute: typeof FeedbackRoute
  FinancerecordsRoute: typeof FinancerecordsRoute
  OrdersRoute: typeof OrdersRoute
  ProductsRoute: typeof ProductsRoute
  ReportsRoute: typeof ReportsRoute
  StaffRoute: typeof StaffRoute
  UsersRoute: typeof UsersRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutusRoute: AboutusRoute,
  CustomersRoute: CustomersRoute,
  DashboardRoute: DashboardRoute,
  EmployeeFeedbackRoute: EmployeeFeedbackRoute,
  EmployeeReportsRoute: EmployeeReportsRoute,
  FeedbackRoute: FeedbackRoute,
  FinancerecordsRoute: FinancerecordsRoute,
  OrdersRoute: OrdersRoute,
  ProductsRoute: ProductsRoute,
  ReportsRoute: ReportsRoute,
  StaffRoute: StaffRoute,
  UsersRoute: UsersRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/aboutus",
        "/customers",
        "/dashboard",
        "/employeeFeedback",
        "/employeeReports",
        "/feedback",
        "/financerecords",
        "/orders",
        "/products",
        "/reports",
        "/staff",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/aboutus": {
      "filePath": "aboutus.tsx"
    },
    "/customers": {
      "filePath": "customers.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/employeeFeedback": {
      "filePath": "employeeFeedback.tsx"
    },
    "/employeeReports": {
      "filePath": "employeeReports.tsx"
    },
    "/feedback": {
      "filePath": "feedback.tsx"
    },
    "/financerecords": {
      "filePath": "financerecords.tsx"
    },
    "/orders": {
      "filePath": "orders.tsx"
    },
    "/products": {
      "filePath": "products.tsx"
    },
    "/reports": {
      "filePath": "reports.tsx"
    },
    "/staff": {
      "filePath": "staff.tsx"
    },
    "/users": {
      "filePath": "users.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
