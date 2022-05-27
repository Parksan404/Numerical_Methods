import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import Bisection from './Root of Equation/Bisection'
import False_position from './Root of Equation/False_position'
import Onepoint from './Root of Equation/Onepoint'
import Newton_raphson from './Root of Equation/Newton_raphson'
import Secant from './Root of Equation/Secant'

import Crammer from './Linear Algebra/Crammer'
import Gauss from './Linear Algebra/Gauss_eliminate'
import Gauss_Jordan from './Linear Algebra/Gauss_Jordan'
import LU from './Linear Algebra/LU'
import Jacobi from './Linear Algebra/Jacobi'
import Gauss_seidel from './Linear Algebra/Gauss_seidel'
import Conjugate_Gradient from './Linear Algebra/Conjugate_Gradient'

import Lagrange from './Interpolation/Lagrange'
import Newton from './Interpolation/Newton'
import Spline from './Interpolation/Spline'

import Linear from './Regression/Linear'
import MultipleLinear from './Regression/MultipleLinear'
import Polynomial from './Regression/Polynomial'

import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

function App() {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <div>
                        <h1 style={{ color: 'white', marginTop: '8px' }}>
                            Numerical Method
                        </h1>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            theme="dark"
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                icon={<UserOutlined />}
                                title="Root of Equation"
                            >
                                <Menu.Item key="1">
                                    <Link to="/Bisection">Bisection</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/Flase_position">
                                        False_position
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/Onepoint">Onepoint</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/Newton_raphson">
                                        Newton_raphson
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/Secant">Secant</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                icon={<LaptopOutlined />}
                                title="Linear Algebra"
                            >
                                <Menu.Item key="6">
                                    <Link to="/Crammer">Cramer's Rule</Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/Gauss">Gauss Elimination</Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/Gauss_Jordan">Gauss Jordan</Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to="/LU">LU Decomposition</Link>
                                </Menu.Item>
                                <Menu.Item key="10">
                                    <Link to="/Jacobi">Jacobi Iteration</Link>
                                </Menu.Item>
                                <Menu.Item key="11">
                                    <Link to="/Gauss_seidel">Gauss Seidel</Link>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Link to="/Conjugate_Gradient">
                                        Conjugate Gradient
                                    </Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu
                                key="sub3"
                                icon={<NotificationOutlined />}
                                title="Interpolation"
                            >
                                <Menu.Item key="13">
                                    <Link to="/Newton">Newton</Link>
                                </Menu.Item>
                                <Menu.Item key="14">
                                    <Link to="/Lagrange">Lagrange</Link>
                                </Menu.Item>
                                <Menu.Item key="15">
                                    <Link to="/Spline">Spline</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                icon={<NotificationOutlined />}
                                title="Least Squares Regression"
                            >
                                <Menu.Item key="16">
                                    <Link to="/Linear">Linear</Link>
                                </Menu.Item>
                                <Menu.Item key="17">
                                    <Link to="/Polynomial">Polynomial</Link>
                                </Menu.Item>
                                <Menu.Item key="18">
                                    <Link to="/MultipleLinear">
                                        MultipleLinear
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 600,
                            }}
                        >
                            <Switch>
                                {/* Root of Equation */}
                                <Route
                                    exact
                                    path="/Bisection"
                                    component={Bisection}
                                />
                                <Route
                                    exact
                                    path="/Flase_position"
                                    component={False_position}
                                />
                                <Route
                                    exact
                                    path="/Onepoint"
                                    component={Onepoint}
                                />
                                <Route
                                    exact
                                    path="/Newton_raphson"
                                    component={Newton_raphson}
                                />
                                <Route
                                    exact
                                    path="/Secant"
                                    component={Secant}
                                />
                                <Route
                                    exact
                                    path="/Crammer"
                                    component={Crammer}
                                />
                                <Route exact path="/Gauss" component={Gauss} />
                                <Route
                                    exact
                                    path="/Gauss_Jordan"
                                    component={Gauss_Jordan}
                                />
                                <Route exact path="/LU" component={LU} />
                                <Route
                                    exact
                                    path="/Jacobi"
                                    component={Jacobi}
                                />
                                <Route
                                    exact
                                    path="/Gauss_seidel"
                                    component={Gauss_seidel}
                                />
                                <Route
                                    exact
                                    path="/Conjugate_Gradient"
                                    component={Conjugate_Gradient}
                                />
                                <Route
                                    exact
                                    path="/Lagrange"
                                    component={Lagrange}
                                />
                                <Route
                                    exact
                                    path="/Newton"
                                    component={Newton}
                                />
                                <Route
                                    exact
                                    path="/Spline"
                                    component={Spline}
                                />
                                <Route
                                    exact
                                    path="/Linear"
                                    component={Linear}
                                />
                                <Route
                                    exact
                                    path="/Polynomial"
                                    component={Polynomial}
                                />
                                <Route
                                    exact
                                    path="/MultipleLinear"
                                    component={MultipleLinear}
                                />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    )
}
export default App
