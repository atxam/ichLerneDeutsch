import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Books from '@/views/Books.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Registration.vue'
import Profile from '@/views/Profile.vue'
import Book from '@/views/Book.vue'
import BookPart from '@/views/BookPart.vue'
import authGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: '/book/:bookId',
      props: true,
      name: 'book',
      component: Book
    },

    {
      path: '/book/:bookId/part/:partId',
      props: true,
      name: 'bookPart',
      component: BookPart
    }
  ]
})