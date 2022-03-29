import menu from './menu/menu'

const components = [
    { name: menu.name, component: menu },
]

const install = _Vue => {
    components.forEach(item => _Vue.component(item.name, item.component))
}

export default install