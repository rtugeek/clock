import GlitchWidgetDefine from './Glitch.widget'

const url = GlitchWidgetDefine.path
const name = GlitchWidgetDefine.name

const GlitchWidgetRoutes = [
  {
    path: url,
    name: `${name}`,
    component: () => import(/* webpackChunkName: "com.wisdom.widgets.glitch" */ './GlitchWidgetView.vue'),
  },
]

export default GlitchWidgetRoutes
