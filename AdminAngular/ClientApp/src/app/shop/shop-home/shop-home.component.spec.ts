/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ShopHomeComponent } from './shop-home.component';

let component: ShopHomeComponent;
let fixture: ComponentFixture<ShopHomeComponent>;

describe('shop-home component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShopHomeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ShopHomeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});