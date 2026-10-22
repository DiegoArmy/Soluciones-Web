import { Routes } from '@angular/router';
import { Demo1} from './demo/demo1/demo1';
import { Demon2 } from './demo/demon2/demon2';

export const routes: Routes = [
   {path: '',component:Demo1}, 
   {path: 'otro',component:Demon2}
];
