import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
imports: [
    CommonModule,
    AppRoutingModule
],
declarations: [],
entryComponents: [],
exports: [],
})
export class SharedModule {
static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
    };
}
}