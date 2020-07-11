/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProductDetailComponent } from './product-detail.component';

let component: ProductDetailComponent;
let fixture: ComponentFixture<ProductDetailComponent>;

describe('product-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProductDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProductDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});