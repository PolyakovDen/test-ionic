import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import VTabs from '@/components/VTabs.vue';
import VDetails from '@/views/VDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tasks',
  },
  {
    path: '/tabs/',
    component: VTabs,
    children: [
      {
        path: '',
        redirect: 'tasks',
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: () => import('@/views/VTasks.vue'),
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: () => import('@/views/VNotifications.vue'),
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: VDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
