import { Routes } from '@angular/router'
import { HomeComponent } from './home-component/home-component'
import { Parent } from './parent/parent'
import { School } from './school/school'
import { User } from './user/user'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'parent', component: Parent },
    { path: 'school', component: School },
    { path: 'user/:id', component: User },
]
